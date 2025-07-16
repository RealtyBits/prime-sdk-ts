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
import { CreateConversionRequest, CreateConversionResponse, CreateOnchainTransactionRequest, CreateOnchainTransactionResponse, CreateTransferRequest, CreateTransferResponse, CreateWithdrawalRequest, CreateWithdrawalResponse, GetTransactionRequest, GetTransactionResponse, ListPortfolioTransactionsRequest, ListPortfolioTransactionsResponse, ListWalletTransactionsRequest, ListWalletTransactionsResponse } from './types';
export interface ITransactionsService {
    getTransaction(request: GetTransactionRequest, options?: CoinbaseCallOptions): Promise<GetTransactionResponse>;
    listPortfolioTransactions(request: ListPortfolioTransactionsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioTransactionsResponse>;
    listWalletTransactions(request: ListWalletTransactionsRequest, options?: CoinbaseCallOptions): Promise<ListWalletTransactionsResponse>;
    createConversion(request: CreateConversionRequest, options?: CoinbaseCallOptions): Promise<CreateConversionResponse>;
    createTransfer(request: CreateTransferRequest, options?: CoinbaseCallOptions): Promise<CreateTransferResponse>;
    createWithdrawal(request: CreateWithdrawalRequest, options?: CoinbaseCallOptions): Promise<CreateWithdrawalResponse>;
    createOnchainTransaction(request: CreateOnchainTransactionRequest, options?: CoinbaseCallOptions): Promise<CreateOnchainTransactionResponse>;
}
export declare class TransactionsService implements ITransactionsService {
    private client;
    constructor(client: CoinbasePrimeClient);
    getTransaction(request: GetTransactionRequest, options?: CoinbaseCallOptions): Promise<GetTransactionResponse>;
    listPortfolioTransactions(request: ListPortfolioTransactionsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioTransactionsResponse>;
    listWalletTransactions(request: ListWalletTransactionsRequest, options?: CoinbaseCallOptions): Promise<ListWalletTransactionsResponse>;
    createConversion(request: CreateConversionRequest, options?: CoinbaseCallOptions): Promise<CreateConversionResponse>;
    createTransfer(request: CreateTransferRequest, options?: CoinbaseCallOptions): Promise<CreateTransferResponse>;
    createWithdrawal(request: CreateWithdrawalRequest, options?: CoinbaseCallOptions): Promise<CreateWithdrawalResponse>;
    createOnchainTransaction(request: CreateOnchainTransactionRequest, options?: CoinbaseCallOptions): Promise<CreateOnchainTransactionResponse>;
}
