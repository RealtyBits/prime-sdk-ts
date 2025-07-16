"use strict";
/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseExtractors = void 0;
exports.createPaginatedResponse = createPaginatedResponse;
exports.getDefaultPaginationOptions = getDefaultPaginationOptions;
exports.getQueryParams = getQueryParams;
const constants_1 = require("../constants");
/**
 * Validates that a number is a positive integer
 */
function validatePositiveInteger(value, defaultValue) {
    if (value === undefined || value === null)
        return defaultValue;
    const num = Number(value);
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error(`Value must be a positive integer, got: ${value}`);
    }
    return num;
}
/**
 * Factory function to create enhanced response objects with pagination methods
 */
function createPaginatedResponse(responseData, apiCall, baseRequest, dataExtractor, options) {
    var _a, _b;
    const paginationMethods = {
        __apiCall: apiCall,
        __baseRequest: baseRequest,
        __dataExtractor: dataExtractor,
        __config: {
            defaultLimit: 25,
            maxPages: (_a = options === null || options === void 0 ? void 0 : options.maxPages) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_MAX_PAGES,
            maxItems: (_b = options === null || options === void 0 ? void 0 : options.maxItems) !== null && _b !== void 0 ? _b : constants_1.DEFAULT_MAX_ITEMS,
        },
        __currentPage: 1,
        __totalItemsFetched: 0,
        hasNext() {
            var _a, _b, _c, _d;
            const pagination = this.pagination;
            const hasApiNext = (_b = (_a = pagination === null || pagination === void 0 ? void 0 : pagination.has_next) !== null && _a !== void 0 ? _a : pagination === null || pagination === void 0 ? void 0 : pagination.hasNext) !== null && _b !== void 0 ? _b : false;
            // Check if API has more pages
            if (!hasApiNext) {
                return false;
            }
            // Check if we've reached the max pages limit
            if (this.__currentPage >= ((_c = this.__config.maxPages) !== null && _c !== void 0 ? _c : constants_1.DEFAULT_MAX_PAGES)) {
                return false;
            }
            // Check if we've reached the max items limit
            if (this.__totalItemsFetched >=
                ((_d = this.__config.maxItems) !== null && _d !== void 0 ? _d : constants_1.DEFAULT_MAX_ITEMS)) {
                return false;
            }
            return true;
        },
        getNextCursor() {
            const pagination = this.pagination;
            return pagination === null || pagination === void 0 ? void 0 : pagination.nextCursor;
        },
        next(options) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                if (options === null || options === void 0 ? void 0 : options.maxPages) {
                    this.__config.maxPages = validatePositiveInteger(options.maxPages, constants_1.DEFAULT_MAX_PAGES);
                }
                if (options === null || options === void 0 ? void 0 : options.maxItems) {
                    this.__config.maxItems = validatePositiveInteger(options.maxItems, constants_1.DEFAULT_MAX_ITEMS);
                }
                if (!this.hasNext()) {
                    return null;
                }
                const request = Object.assign(Object.assign({}, this.__baseRequest), { cursor: this.getNextCursor(), limit: (_b = (_a = this.__baseRequest) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : this.__config.defaultLimit });
                const nextResponse = yield this.__apiCall(request, options);
                if (nextResponse) {
                    // Update pagination tracking
                    nextResponse.__currentPage = this.__currentPage + 1;
                    const nextData = this.__dataExtractor(nextResponse);
                    nextResponse.__totalItemsFetched =
                        this.__totalItemsFetched + nextData.length;
                }
                return nextResponse;
            });
        },
        fetchAll(options, progressCallback) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                const allData = [];
                let currentResponse = this;
                let pageCount = 1;
                let totalItems = 0;
                if (options === null || options === void 0 ? void 0 : options.maxPages) {
                    this.__config.maxPages = validatePositiveInteger(options.maxPages, constants_1.DEFAULT_MAX_PAGES);
                }
                if (options === null || options === void 0 ? void 0 : options.maxItems) {
                    this.__config.maxItems = validatePositiveInteger(options.maxItems, constants_1.DEFAULT_MAX_ITEMS);
                }
                // Add current page data
                const currentData = this.__dataExtractor(currentResponse);
                allData.push(...currentData);
                totalItems += currentData.length;
                progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(pageCount, totalItems);
                // Fetch remaining pages
                while (currentResponse.hasNext() &&
                    pageCount < ((_a = this.__config.maxPages) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_MAX_PAGES) &&
                    totalItems < ((_b = this.__config.maxItems) !== null && _b !== void 0 ? _b : constants_1.DEFAULT_MAX_ITEMS)) {
                    const nextResponse = yield currentResponse.next(this.__config);
                    if (!nextResponse)
                        break;
                    pageCount++;
                    const nextData = this.__dataExtractor(nextResponse);
                    allData.push(...nextData);
                    totalItems += nextData.length;
                    progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(pageCount, totalItems);
                    currentResponse = nextResponse;
                }
                return allData;
            });
        },
    };
    // Initialize tracking for the first page
    const currentPageData = dataExtractor(responseData);
    paginationMethods.__totalItemsFetched = currentPageData.length;
    return Object.assign(responseData, paginationMethods);
}
/**
 * Common data extractors for typical API responses
 */
exports.ResponseExtractors = {
    activities: (response) => response.activities || [],
    addresses: (response) => response.addresses || [],
    allocations: (response) => response.allocations || [],
    balances: (response) => response.balances || [],
    fills: (response) => response.fills || [],
    invoices: (response) => response.invoices || [],
    orders: (response) => response.orders || [],
    positions: (response) => response.positions || [],
    products: (response) => response.products || [],
    portfolios: (response) => response.portfolios || [],
    transactions: (response) => response.transactions || [],
    users: (response) => response.users || [],
    wallets: (response) => response.wallets || [],
};
/**
 * Get the default pagination options for a client
 */
function getDefaultPaginationOptions(client, options) {
    var _a, _b;
    return Object.assign(Object.assign({}, options), { maxPages: (_a = options === null || options === void 0 ? void 0 : options.maxPages) !== null && _a !== void 0 ? _a : client.getMaxPages(), maxItems: (_b = options === null || options === void 0 ? void 0 : options.maxItems) !== null && _b !== void 0 ? _b : client.getMaxItems() });
}
function getQueryParams(client, request) {
    let queryParams = {};
    if (request.limit) {
        queryParams.limit = request.limit;
    }
    if (request.cursor) {
        queryParams.cursor = request.cursor;
    }
    if (!queryParams.limit) {
        queryParams.limit = client.getDefaultPaginationLimit();
    }
    return queryParams;
}
