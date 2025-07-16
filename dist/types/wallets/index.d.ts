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
import { ListWalletsRequest, ListWalletsResponse, GetWalletRequest, GetWalletResponse, GetWalletDepositInstructionsRequest, GetWalletDepositInstructionsResponse, ListWalletAddressesRequest, ListWalletAddressesResponse, CreateWalletRequest, CreateWalletResponse, CreateWalletDepositAddressRequest, CreateWalletDepositAddressResponse } from './types';
export interface IWalletsService {
    listWallets(request: ListWalletsRequest, options?: CoinbaseCallOptions): Promise<ListWalletsResponse>;
    getWallet(request: GetWalletRequest, options?: CoinbaseCallOptions): Promise<GetWalletResponse>;
    getWalletDepositInstructions(request: GetWalletDepositInstructionsRequest, options?: CoinbaseCallOptions): Promise<GetWalletDepositInstructionsResponse>;
    listWalletAddresses(request: ListWalletAddressesRequest, options?: CoinbaseCallOptions): Promise<ListWalletAddressesResponse>;
    createWallet(request: CreateWalletRequest, options?: CoinbaseCallOptions): Promise<CreateWalletResponse>;
    createWalletDepositAddress(request: CreateWalletDepositAddressRequest, options?: CoinbaseCallOptions): Promise<CreateWalletDepositAddressResponse>;
}
export declare class WalletsService implements IWalletsService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listWallets(request: ListWalletsRequest, options?: CoinbaseCallOptions): Promise<ListWalletsResponse>;
    getWallet(request: GetWalletRequest, options?: CoinbaseCallOptions): Promise<GetWalletResponse>;
    getWalletDepositInstructions(request: GetWalletDepositInstructionsRequest, options?: CoinbaseCallOptions): Promise<GetWalletDepositInstructionsResponse>;
    listWalletAddresses(request: ListWalletAddressesRequest, options?: CoinbaseCallOptions): Promise<ListWalletAddressesResponse>;
    createWallet(request: CreateWalletRequest, options?: CoinbaseCallOptions): Promise<CreateWalletResponse>;
    createWalletDepositAddress(request: CreateWalletDepositAddressRequest, options?: CoinbaseCallOptions): Promise<CreateWalletDepositAddressResponse>;
}
