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
import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import { CoinbasePrimeClient } from '../client';
import { GetWalletBalanceRequest, GetWalletBalanceResponse, ListOnchainWalletBalancesRequest, ListOnchainWalletBalancesResponse, ListPortfolioBalancesRequest, ListPortfolioBalancesResponse, ListEntityBalancesRequest, ListEntityBalancesResponse } from './types';
export interface IBalancesService {
    listPortfolioBalances(request: ListPortfolioBalancesRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioBalancesResponse>;
    getWalletBalance(request: GetWalletBalanceRequest, options?: CoinbaseCallOptions): Promise<GetWalletBalanceResponse>;
    listOnchainWalletBalances(request: ListOnchainWalletBalancesRequest, options?: CoinbaseCallOptions): Promise<ListOnchainWalletBalancesResponse>;
    listEntityBalances(request: ListEntityBalancesRequest, options?: CoinbaseCallOptions): Promise<ListEntityBalancesResponse>;
}
export declare class BalancesService implements IBalancesService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listPortfolioBalances(request: ListPortfolioBalancesRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioBalancesResponse>;
    getWalletBalance(request: GetWalletBalanceRequest, options?: CoinbaseCallOptions): Promise<GetWalletBalanceResponse>;
    listOnchainWalletBalances(request: ListOnchainWalletBalancesRequest, options?: CoinbaseCallOptions): Promise<ListOnchainWalletBalancesResponse>;
    listEntityBalances(request: ListEntityBalancesRequest, options?: CoinbaseCallOptions): Promise<ListEntityBalancesResponse>;
}
