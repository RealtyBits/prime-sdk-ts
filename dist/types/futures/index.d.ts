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
import { ListEntityFuturesSweepsRequest, ListEntityFuturesSweepsResponse, GetEntityFuturesBalanceRequest, GetEntityFuturesBalanceResponse, GetEntityFuturesPositionsRequest, GetEntityFuturesPositionsResponse, ScheduleEntityFuturesSweepRequest, ScheduleEntityFuturesSweepResponse, UpdateEntityFuturesAutoSweepRequest, UpdateEntityFuturesAutoSweepResponse, CancelEntitySweepRequest, CancelEntitySweepResponse } from './types';
export interface IFuturesService {
    listEntitySweeps(request: ListEntityFuturesSweepsRequest, options?: CoinbaseCallOptions): Promise<ListEntityFuturesSweepsResponse>;
    getEntityBalance(request: GetEntityFuturesBalanceRequest, options?: CoinbaseCallOptions): Promise<GetEntityFuturesBalanceResponse>;
    getEntityPositions(request: GetEntityFuturesPositionsRequest, options?: CoinbaseCallOptions): Promise<GetEntityFuturesPositionsResponse>;
    scheduleEntitySweep(request: ScheduleEntityFuturesSweepRequest, options?: CoinbaseCallOptions): Promise<ScheduleEntityFuturesSweepResponse>;
    updateEntityAutoSweep(request: UpdateEntityFuturesAutoSweepRequest, options?: CoinbaseCallOptions): Promise<UpdateEntityFuturesAutoSweepResponse>;
    cancelEntitySweep(request: CancelEntitySweepRequest, options?: CoinbaseCallOptions): Promise<CancelEntitySweepResponse>;
}
export declare class FuturesService implements IFuturesService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listEntitySweeps(request: ListEntityFuturesSweepsRequest, options?: CoinbaseCallOptions): Promise<ListEntityFuturesSweepsResponse>;
    getEntityBalance(request: GetEntityFuturesBalanceRequest, options?: CoinbaseCallOptions): Promise<GetEntityFuturesBalanceResponse>;
    getEntityPositions(request: GetEntityFuturesPositionsRequest, options?: CoinbaseCallOptions): Promise<GetEntityFuturesPositionsResponse>;
    scheduleEntitySweep(request: ScheduleEntityFuturesSweepRequest, options?: CoinbaseCallOptions): Promise<ScheduleEntityFuturesSweepResponse>;
    updateEntityAutoSweep(request: UpdateEntityFuturesAutoSweepRequest, options?: CoinbaseCallOptions): Promise<UpdateEntityFuturesAutoSweepResponse>;
    cancelEntitySweep(request: CancelEntitySweepRequest, options?: CoinbaseCallOptions): Promise<CancelEntitySweepResponse>;
}
