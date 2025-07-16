"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsService = exports.UsersService = exports.TransactionsService = exports.StakingService = exports.ProductsService = exports.PositionsService = exports.PortfoliosService = exports.PaymentMethodsService = exports.OrdersService = exports.OnchainAddressBookService = exports.InvoicesService = exports.FuturesService = exports.CommissionService = exports.BalancesService = exports.AssetsService = exports.AllocationService = exports.AddressBooksService = exports.ActivitiesService = exports.CoinbasePrimeCredentials = exports.CoinbasePrimeClient = void 0;
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
var client_1 = require("./client");
Object.defineProperty(exports, "CoinbasePrimeClient", { enumerable: true, get: function () { return client_1.CoinbasePrimeClient; } });
var credentials_1 = require("./credentials");
Object.defineProperty(exports, "CoinbasePrimeCredentials", { enumerable: true, get: function () { return credentials_1.CoinbasePrimeCredentials; } });
var activities_1 = require("./activities");
Object.defineProperty(exports, "ActivitiesService", { enumerable: true, get: function () { return activities_1.ActivitiesService; } });
var addressBooks_1 = require("./addressBooks");
Object.defineProperty(exports, "AddressBooksService", { enumerable: true, get: function () { return addressBooks_1.AddressBooksService; } });
var allocations_1 = require("./allocations");
Object.defineProperty(exports, "AllocationService", { enumerable: true, get: function () { return allocations_1.AllocationService; } });
var assets_1 = require("./assets");
Object.defineProperty(exports, "AssetsService", { enumerable: true, get: function () { return assets_1.AssetsService; } });
var balances_1 = require("./balances");
Object.defineProperty(exports, "BalancesService", { enumerable: true, get: function () { return balances_1.BalancesService; } });
var commission_1 = require("./commission");
Object.defineProperty(exports, "CommissionService", { enumerable: true, get: function () { return commission_1.CommissionService; } });
var futures_1 = require("./futures");
Object.defineProperty(exports, "FuturesService", { enumerable: true, get: function () { return futures_1.FuturesService; } });
var invoices_1 = require("./invoices");
Object.defineProperty(exports, "InvoicesService", { enumerable: true, get: function () { return invoices_1.InvoicesService; } });
var onchainAddressBook_1 = require("./onchainAddressBook");
Object.defineProperty(exports, "OnchainAddressBookService", { enumerable: true, get: function () { return onchainAddressBook_1.OnchainAddressBookService; } });
var orders_1 = require("./orders");
Object.defineProperty(exports, "OrdersService", { enumerable: true, get: function () { return orders_1.OrdersService; } });
var paymentMethods_1 = require("./paymentMethods");
Object.defineProperty(exports, "PaymentMethodsService", { enumerable: true, get: function () { return paymentMethods_1.PaymentMethodsService; } });
var portfolios_1 = require("./portfolios");
Object.defineProperty(exports, "PortfoliosService", { enumerable: true, get: function () { return portfolios_1.PortfoliosService; } });
var positions_1 = require("./positions");
Object.defineProperty(exports, "PositionsService", { enumerable: true, get: function () { return positions_1.PositionsService; } });
var products_1 = require("./products");
Object.defineProperty(exports, "ProductsService", { enumerable: true, get: function () { return products_1.ProductsService; } });
var staking_1 = require("./staking");
Object.defineProperty(exports, "StakingService", { enumerable: true, get: function () { return staking_1.StakingService; } });
var transactions_1 = require("./transactions");
Object.defineProperty(exports, "TransactionsService", { enumerable: true, get: function () { return transactions_1.TransactionsService; } });
var users_1 = require("./users");
Object.defineProperty(exports, "UsersService", { enumerable: true, get: function () { return users_1.UsersService; } });
var wallets_1 = require("./wallets");
Object.defineProperty(exports, "WalletsService", { enumerable: true, get: function () { return wallets_1.WalletsService; } });
__exportStar(require("./model/enums/"), exports);
