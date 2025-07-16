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
exports.UsersService = void 0;
const paginatedResponse_1 = require("../shared/paginatedResponse");
class UsersService {
    constructor(client) {
        this.client = client;
    }
    listUsers(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            const response = yield this.client.request({
                url: `entities/${request.entityId}/users`,
                queryParams,
                callOptions: options,
            });
            const responseData = response.data;
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(responseData, this.listUsers.bind(this), request, paginatedResponse_1.ResponseExtractors.users, paginationOptions);
        });
    }
    listPortfolioUsers(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/users`,
                queryParams,
                callOptions: options,
            });
            const responseData = response.data;
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(responseData, this.listPortfolioUsers.bind(this), request, paginatedResponse_1.ResponseExtractors.users, paginationOptions);
        });
    }
}
exports.UsersService = UsersService;
