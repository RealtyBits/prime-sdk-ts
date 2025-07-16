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
exports.FinancingService = void 0;
class FinancingService {
    constructor(client) {
        this.client = client;
    }
    listExistingLocates(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/locates`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listInterestAccruals(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { entityId: undefined });
            const response = yield this.client.request({
                url: `entities/${request.entityId}/accruals`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    listPortfolioInterestAccruals(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/accruals`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    listMarginCallSummaries(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { entityId: undefined });
            const response = yield this.client.request({
                url: `entities/${request.entityId}/margin_summaries`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    listMarginConversions(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/margin_conversions`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    getEntityLocateAvailabilities(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { entityId: undefined });
            const response = yield this.client.request({
                url: `entities/${request.entityId}/locates_availability`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    getMarginInformation(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `entities/${request.entityId}/margin`,
                callOptions: options,
            });
            return response.data;
        });
    }
    getPortfolioBuyingPower(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/buying_power`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    getPortfolioCreditInformation(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/credit`,
                callOptions: options,
            });
            return response.data;
        });
    }
    getPortfolioWithdrawalPower(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/withdrawal_power`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    getTieredPricingFees(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = Object.assign(Object.assign({}, request), { entityId: undefined });
            const response = yield this.client.request({
                url: `entities/${request.entityId}/tf_tiered_fees`,
                callOptions: options,
                queryParams,
            });
            return response.data;
        });
    }
    createNewLocates(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyParams = Object.assign(Object.assign({}, request), { portfolioId: undefined });
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/locates`,
                callOptions: options,
                bodyParams,
            });
            return response.data;
        });
    }
}
exports.FinancingService = FinancingService;
