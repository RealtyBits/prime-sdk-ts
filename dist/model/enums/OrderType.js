"use strict";
/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * This file is generated by Openapi Generator https://github.com/openapitools/openapi-generator
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
 *
 *  Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderType = void 0;
/**
 * - UNKNOWN_ORDER_TYPE: nil value  - MARKET: A [market order](https://en.wikipedia.org/wiki/Order_(exchange)#Market_order)  - LIMIT: A [limit order](https://en.wikipedia.org/wiki/Order_(exchange)#Limit_order)  - TWAP: A [time-weighted average price order](https://en.wikipedia.org/wiki/Time-weighted_average_price)  - BLOCK: A [block trade](https://en.wikipedia.org/wiki/Block_trade)  - VWAP: A [volume-weighted average price order](https://en.wikipedia.org/wiki/Volume-weighted_average_price)  - STOP_LIMIT: A [conditional order combined of stop order and limit order](https://en.wikipedia.org/wiki/Order_(exchange)#Stop-limit_order)  - RFQ: A [request for quote](https://en.wikipedia.org/wiki/Request_for_quote)
 */
var OrderType;
(function (OrderType) {
    OrderType["UnknownOrderType"] = "UNKNOWN_ORDER_TYPE";
    OrderType["Market"] = "MARKET";
    OrderType["Limit"] = "LIMIT";
    OrderType["Twap"] = "TWAP";
    OrderType["Block"] = "BLOCK";
    OrderType["Vwap"] = "VWAP";
    OrderType["StopLimit"] = "STOP_LIMIT";
    OrderType["Rfq"] = "RFQ";
})(OrderType || (exports.OrderType = OrderType = {}));
