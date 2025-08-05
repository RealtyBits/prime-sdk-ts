"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbasePrimeClient = void 0;
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
const constants_1 = require("./constants");
const toCamelCase_1 = require("./shared/toCamelCase");
class CoinbasePrimeClient extends core_ts_1.CoinbaseClient {
    constructor(credentials, apiBasePath, options) {
        const defaultClientOptions = Object.assign({ defaultLimit: constants_1.DEFAULT_PAGINATION_LIMIT, maxPages: constants_1.DEFAULT_MAX_PAGES, maxItems: constants_1.DEFAULT_MAX_ITEMS }, options);
        let basePath = constants_1.API_BASE_PATH;
        if (apiBasePath && apiBasePath.length > 0) {
            basePath = apiBasePath;
        }
        super(basePath, credentials, constants_1.USER_AGENT, defaultClientOptions);
        // transform the response data to camelCase
        this.addTransformResponse((response) => {
            return Object.assign(Object.assign({}, response), { data: (0, toCamelCase_1.toCamelCase)(response.data) });
        });
    }
    getDefaultPaginationLimit() {
        return constants_1.DEFAULT_PAGINATION_LIMIT;
    }
}
exports.CoinbasePrimeClient = CoinbasePrimeClient;
