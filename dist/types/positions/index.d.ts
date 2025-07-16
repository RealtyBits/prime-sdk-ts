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
import { ListAggregateEntityPositionsRequest, ListAggregateEntityPositionsResponse, ListEntityPositionsRequest, ListEntityPositionsResponse } from './types';
export interface IPositionsService {
    listAggregateEntityPositions(request: ListAggregateEntityPositionsRequest, options?: CoinbaseCallOptions): Promise<ListAggregateEntityPositionsResponse>;
    listEntityPositions(request: ListEntityPositionsRequest, options?: CoinbaseCallOptions): Promise<ListEntityPositionsResponse>;
}
export declare class PositionsService implements IPositionsService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listAggregateEntityPositions(request: ListAggregateEntityPositionsRequest, options?: CoinbaseCallOptions): Promise<ListAggregateEntityPositionsResponse>;
    listEntityPositions(request: ListEntityPositionsRequest, options?: CoinbaseCallOptions): Promise<ListEntityPositionsResponse>;
}
