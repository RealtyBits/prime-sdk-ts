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
exports.TransactionsService = void 0;
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
class TransactionsService {
    constructor(client) {
        this.client = client;
    }
    getTransaction(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/transactions/${request.transactionId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listPortfolioTransactions(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            if (!queryParams.limit) {
                queryParams.limit = this.client.getDefaultPaginationLimit();
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/transactions`,
                queryParams,
                callOptions: options,
            });
            const responseData = response.data;
            // Merge client defaults with call options
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            // Enhance the response with pagination methods
            return (0, paginatedResponse_1.createPaginatedResponse)(responseData, this.listPortfolioTransactions.bind(this), request, paginatedResponse_1.ResponseExtractors.transactions, paginationOptions);
        });
    }
    listWalletTransactions(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined, walletId: undefined });
            if (!queryParams.limit) {
                queryParams.limit = this.client.getDefaultPaginationLimit();
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/transactions`,
                queryParams,
                callOptions: options,
            });
            const responseData = response.data;
            // Merge client defaults with call options
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            // Enhance the response with pagination methods
            return (0, paginatedResponse_1.createPaginatedResponse)(responseData, this.listWalletTransactions.bind(this), request, paginatedResponse_1.ResponseExtractors.transactions, paginationOptions);
        });
    }
    createConversion(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyParams = Object.assign(Object.assign({}, request), { portfolioId: undefined, walletId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/conversions`,
                bodyParams,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    createTransfer(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyParams = Object.assign(Object.assign({}, request), { portfolioId: undefined, walletId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/transfers`,
                bodyParams,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    createWithdrawal(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyParams = Object.assign(Object.assign({}, request), { portfolioId: undefined, walletId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/withdrawals`,
                bodyParams,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
    createOnchainTransaction(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyParams = Object.assign(Object.assign({}, request), { portfolioId: undefined, walletId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/onchain_transaction`,
                bodyParams,
                method: core_ts_1.Method.POST,
                callOptions: options,
            });
            return response.data;
        });
    }
}
exports.TransactionsService = TransactionsService;
