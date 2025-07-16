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
exports.BalancesService = void 0;
const paginatedResponse_1 = require("../shared/paginatedResponse");
class BalancesService {
    constructor(client) {
        this.client = client;
    }
    listPortfolioBalances(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/balances`,
                queryParams,
                callOptions: options,
            });
            return response.data;
        });
    }
    getWalletBalance(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/balance`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listOnchainWalletBalances(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.visibilityStatuses) {
                queryParams.visibilityStatuses = request.visibilityStatuses;
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/wallets/${request.walletId}/web3_balances`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listOnchainWalletBalances.bind(this), request, paginatedResponse_1.ResponseExtractors.balances, paginationOptions);
        });
    }
    listEntityBalances(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.symbols) {
                queryParams.symbols = request.symbols;
            }
            if (request.aggregationType) {
                queryParams.aggregationType = request.aggregationType;
            }
            const response = yield this.client.request({
                url: `entities/${request.entityId}/balances`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listEntityBalances.bind(this), request, paginatedResponse_1.ResponseExtractors.balances, paginationOptions);
        });
    }
}
exports.BalancesService = BalancesService;
