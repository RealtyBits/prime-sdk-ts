/**
 * Copyright 2025-present Coinbase Global, Inc.
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
import { ListOnchainAddressBookRequest, ListOnchainAddressBookResponse, CreateOnchainAddressBookEntryRequest, CreateOnchainAddressBookEntryResponse, UpdateOnchainAddressBookEntryRequest, UpdateOnchainAddressBookEntryResponse, DeleteOnchainAddressBookEntryRequest, DeleteOnchainAddressBookEntryResponse } from './types';
export interface IOnchainAddressBookService {
    listOnchainAddressBook(request: ListOnchainAddressBookRequest, options?: CoinbaseCallOptions): Promise<ListOnchainAddressBookResponse>;
    createOnchainAddressBookEntry(request: CreateOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<CreateOnchainAddressBookEntryResponse>;
    updateOnchainAddressBookEntry(request: UpdateOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<UpdateOnchainAddressBookEntryResponse>;
    deleteOnchainAddressBook(request: DeleteOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<DeleteOnchainAddressBookEntryResponse>;
}
export declare class OnchainAddressBookService implements IOnchainAddressBookService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listOnchainAddressBook(request: ListOnchainAddressBookRequest, options?: CoinbaseCallOptions): Promise<ListOnchainAddressBookResponse>;
    createOnchainAddressBookEntry(request: CreateOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<CreateOnchainAddressBookEntryResponse>;
    updateOnchainAddressBookEntry(request: UpdateOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<UpdateOnchainAddressBookEntryResponse>;
    deleteOnchainAddressBook(request: DeleteOnchainAddressBookEntryRequest, options?: CoinbaseCallOptions): Promise<DeleteOnchainAddressBookEntryResponse>;
}
