"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbasePrimeException = exports.CoinbasePrimeClientException = void 0;
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
class CoinbasePrimeClientException extends core_ts_1.CoinbaseClientException {
    constructor(message) {
        super(message);
    }
}
exports.CoinbasePrimeClientException = CoinbasePrimeClientException;
class CoinbasePrimeException extends core_ts_1.CoinbaseError {
    constructor(message, statusCode, response) {
        super(message, statusCode, response);
    }
}
exports.CoinbasePrimeException = CoinbasePrimeException;
