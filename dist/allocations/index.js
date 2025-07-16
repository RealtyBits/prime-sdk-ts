"use strict";
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
exports.AllocationService = void 0;
/**
 * Copyright 2024-present Coinbase Global, Inc.
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
const core_ts_1 = require("@coinbase-sample/core-ts");
const paginatedResponse_1 = require("../shared/paginatedResponse");
class AllocationService {
    constructor(client) {
        this.client = client;
    }
    createAllocation(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `allocations`,
                bodyParams: request,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    createNetAllocation(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `allocations/net`,
                bodyParams: request,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    listPortfolioAllocations(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.startDate) {
                queryParams.startDate = new Date(request.startDate).toISOString();
            }
            if (request.endDate) {
                queryParams.endDate = new Date(request.endDate).toISOString();
            }
            if (request.productIds) {
                queryParams.productIds = request.productIds;
            }
            if (request.orderSide) {
                queryParams.orderSide = request.orderSide;
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/allocations`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listPortfolioAllocations.bind(this), request, paginatedResponse_1.ResponseExtractors.allocations, paginationOptions);
        });
    }
    listNetAllocations(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                allocationId: request.allocationId,
            };
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/allocations/net/${request.nettingId}`,
                queryParams,
                callOptions: options,
            });
            return response.data;
        });
    }
    getAllocation(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/allocations/${request.allocationId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
}
exports.AllocationService = AllocationService;
