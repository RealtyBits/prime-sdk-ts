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
exports.PortfoliosService = void 0;
class PortfoliosService {
    constructor(client) {
        this.client = client;
    }
    getPortfolio(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
    getPortfolioCredit(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/credit`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listPortfolios(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios`,
                callOptions: options,
            });
            return response.data;
        });
    }
}
exports.PortfoliosService = PortfoliosService;
