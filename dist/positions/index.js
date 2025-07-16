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
exports.PositionsService = void 0;
const paginatedResponse_1 = require("../shared/paginatedResponse");
class PositionsService {
    constructor(client) {
        this.client = client;
    }
    listAggregateEntityPositions(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            const response = yield this.client.request({
                url: `entities/${request.entityId}/aggregate_positions`,
                callOptions: options,
                queryParams,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listAggregateEntityPositions.bind(this), request, paginatedResponse_1.ResponseExtractors.positions, paginationOptions);
        });
    }
    listEntityPositions(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            const response = yield this.client.request({
                url: `entities/${request.entityId}/positions`,
                callOptions: options,
                queryParams,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listEntityPositions.bind(this), request, paginatedResponse_1.ResponseExtractors.positions, paginationOptions);
        });
    }
}
exports.PositionsService = PositionsService;
