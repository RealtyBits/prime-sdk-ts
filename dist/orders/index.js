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
exports.OrdersService = void 0;
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
class OrdersService {
    constructor(client) {
        this.client = client;
    }
    getOrder(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/orders/${request.orderId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listPortfolioFills(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.startDate) {
                queryParams.startDate = new Date(request.startDate).toISOString();
            }
            if (request.endDate) {
                queryParams.endDate = new Date(request.endDate).toISOString();
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/fills`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listPortfolioFills.bind(this), request, paginatedResponse_1.ResponseExtractors.fills, paginationOptions);
        });
    }
    listPortfolioOrders(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.orderStatuses) {
                queryParams.orderStatuses = request.orderStatuses;
            }
            if (request.productIds) {
                queryParams.productIds = request.productIds;
            }
            if (request.orderType) {
                queryParams.orderType = request.orderType;
            }
            if (request.orderSide) {
                queryParams.orderSide = request.orderSide;
            }
            if (request.startDate) {
                queryParams.startDate = new Date(request.startDate).toISOString();
            }
            if (request.endDate) {
                queryParams.endDate = new Date(request.endDate).toISOString();
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/orders`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listPortfolioOrders.bind(this), request, paginatedResponse_1.ResponseExtractors.orders, paginationOptions);
        });
    }
    listOrderFills(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/orders/${request.orderId}/fills`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listOrderFills.bind(this), request, paginatedResponse_1.ResponseExtractors.fills, paginationOptions);
        });
    }
    listOpenOrders(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.productIds) {
                queryParams.productIds = request.productIds;
            }
            if (request.orderType) {
                queryParams.orderType = request.orderType;
            }
            if (request.orderSide) {
                queryParams.orderSide = request.orderSide;
            }
            if (request.startDate) {
                queryParams.startDate = new Date(request.startDate).toISOString();
            }
            if (request.endDate) {
                queryParams.endDate = new Date(request.endDate).toISOString();
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/open_orders`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listOpenOrders.bind(this), request, paginatedResponse_1.ResponseExtractors.orders, paginationOptions);
        });
    }
    createOrderPreview(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/orders_preview`,
                method: core_ts_1.Method.POST,
                bodyParams: request,
                callOptions: options,
            });
            return response.data;
        });
    }
    cancelOrder(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/orders/${request.orderId}/cancel`,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    createOrder(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/order`,
                method: core_ts_1.Method.POST,
                bodyParams: request,
                callOptions: options,
            });
            return response.data;
        });
    }
    createQuote(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/rfq`,
                method: core_ts_1.Method.POST,
                bodyParams: request,
                callOptions: options,
            });
            return response.data;
        });
    }
    acceptQuote(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/accept_quote`,
                method: core_ts_1.Method.POST,
                bodyParams: request,
                callOptions: options,
            });
            return response.data;
        });
    }
}
exports.OrdersService = OrdersService;
