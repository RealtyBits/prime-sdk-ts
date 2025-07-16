"use strict";
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
exports.ActivitiesService = void 0;
const paginatedResponse_1 = require("../shared/paginatedResponse");
class ActivitiesService {
    constructor(client) {
        this.client = client;
    }
    getActivity(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `activities/${request.activityId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
    getPortfolioActivity(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/activities/${request.activityId}`,
                callOptions: options,
            });
            return response.data;
        });
    }
    listEntityActivities(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.startTime) {
                queryParams.startTime = new Date(request.startTime).toISOString();
            }
            if (request.endTime) {
                queryParams.endTime = new Date(request.endTime).toISOString();
            }
            if (request.statuses) {
                queryParams.statuses = request.statuses;
            }
            if (request.categories) {
                queryParams.categories = request.categories;
            }
            if (request.symbols) {
                queryParams.symbols = request.symbols;
            }
            if (request.activityLevel) {
                queryParams.activityLevel = request.activityLevel;
            }
            const response = yield this.client.request({
                url: `entities/${request.entityId}/activities`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listEntityActivities.bind(this), request, paginatedResponse_1.ResponseExtractors.activities, paginationOptions);
        });
    }
    listPortfolioActivities(request, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = (0, paginatedResponse_1.getQueryParams)(this.client, request);
            if (request.startTime) {
                queryParams.startTime = new Date(request.startTime).toISOString();
            }
            if (request.endTime) {
                queryParams.endTime = new Date(request.endTime).toISOString();
            }
            if (request.statuses) {
                queryParams.statuses = request.statuses;
            }
            if (request.categories) {
                queryParams.categories = request.categories;
            }
            if (request.symbols) {
                queryParams.symbols = request.symbols;
            }
            const response = yield this.client.request({
                url: `portfolios/${request.portfolioId}/activities`,
                queryParams,
                callOptions: options,
            });
            const paginationOptions = (0, paginatedResponse_1.getDefaultPaginationOptions)(this.client, options);
            return (0, paginatedResponse_1.createPaginatedResponse)(response.data, this.listPortfolioActivities.bind(this), request, paginatedResponse_1.ResponseExtractors.activities, paginationOptions);
        });
    }
}
exports.ActivitiesService = ActivitiesService;
