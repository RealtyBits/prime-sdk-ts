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
import { ListOpenOrdersResponse, ListOpenOrdersRequest, ListOrderFillsRequest, ListOrderFillsResponse, ListPortfolioOrdersResponse, ListPortfolioOrdersRequest, GetOrderResponse, GetOrderRequest, ListPortfolioFillsRequest, ListPortfolioFillsResponse, CreateOrderPreviewRequest, CreateOrderPreviewResponse, CancelOrderRequest, CancelOrderResponse, CreateOrderRequest, CreateOrderResponse, CreateQuoteRequest, CreateQuoteResponse, AcceptQuoteRequest, AcceptQuoteResponse } from './types';
export interface IOrdersService {
    getOrder(request: GetOrderRequest, options?: CoinbaseCallOptions): Promise<GetOrderResponse>;
    listPortfolioFills(request: ListPortfolioFillsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioFillsResponse>;
    listPortfolioOrders(request: ListPortfolioOrdersRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioOrdersResponse>;
    listOrderFills(request: ListOrderFillsRequest, options?: CoinbaseCallOptions): Promise<ListOrderFillsResponse>;
    listOpenOrders(request: ListOpenOrdersRequest, options?: CoinbaseCallOptions): Promise<ListOpenOrdersResponse>;
    createOrderPreview(request: CreateOrderPreviewRequest, options?: CoinbaseCallOptions): Promise<CreateOrderPreviewResponse>;
    cancelOrder(request: CancelOrderRequest, options?: CoinbaseCallOptions): Promise<CancelOrderResponse>;
    createOrder(request: CreateOrderRequest, options?: CoinbaseCallOptions): Promise<CreateOrderResponse>;
    createQuote(request: CreateQuoteRequest, options?: CoinbaseCallOptions): Promise<CreateQuoteResponse>;
    acceptQuote(request: AcceptQuoteRequest, options?: CoinbaseCallOptions): Promise<AcceptQuoteResponse>;
}
export declare class OrdersService implements IOrdersService {
    private client;
    constructor(client: CoinbasePrimeClient);
    getOrder(request: GetOrderRequest, options?: CoinbaseCallOptions): Promise<GetOrderResponse>;
    listPortfolioFills(request: ListPortfolioFillsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioFillsResponse>;
    listPortfolioOrders(request: ListPortfolioOrdersRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioOrdersResponse>;
    listOrderFills(request: ListOrderFillsRequest, options?: CoinbaseCallOptions): Promise<ListOrderFillsResponse>;
    listOpenOrders(request: ListOpenOrdersRequest, options?: CoinbaseCallOptions): Promise<ListOpenOrdersResponse>;
    createOrderPreview(request: CreateOrderPreviewRequest, options?: CoinbaseCallOptions): Promise<CreateOrderPreviewResponse>;
    cancelOrder(request: CancelOrderRequest, options?: CoinbaseCallOptions): Promise<CancelOrderResponse>;
    createOrder(request: CreateOrderRequest, options?: CoinbaseCallOptions): Promise<CreateOrderResponse>;
    createQuote(request: CreateQuoteRequest, options?: CoinbaseCallOptions): Promise<CreateQuoteResponse>;
    acceptQuote(request: AcceptQuoteRequest, options?: CoinbaseCallOptions): Promise<AcceptQuoteResponse>;
}
