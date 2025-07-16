"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MAX_ITEMS = exports.DEFAULT_MAX_PAGES = exports.DEFAULT_PAGINATION_LIMIT = exports.CB_ACCESS_TIMESTAMP_HEADER = exports.CB_ACCESS_SIGNATURE_HEADER = exports.CB_ACCESS_PHRASE_HEADER = exports.CB_ACCESS_KEY_HEADER = exports.USER_AGENT = exports.API_BASE_PATH = exports.VERSION = void 0;
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
exports.VERSION = '0.1.0';
exports.API_BASE_PATH = 'https://api.prime.coinbase.com/v1/';
exports.USER_AGENT = 'coinbase-prime-ts/' + exports.VERSION;
exports.CB_ACCESS_KEY_HEADER = 'X-CB-ACCESS-KEY';
exports.CB_ACCESS_PHRASE_HEADER = 'X-CB-ACCESS-PASSPHRASE';
exports.CB_ACCESS_SIGNATURE_HEADER = 'X-CB-ACCESS-SIGNATURE';
exports.CB_ACCESS_TIMESTAMP_HEADER = 'X-CB-ACCESS-TIMESTAMP';
exports.DEFAULT_PAGINATION_LIMIT = 25;
exports.DEFAULT_MAX_PAGES = 100;
exports.DEFAULT_MAX_ITEMS = 10000;
