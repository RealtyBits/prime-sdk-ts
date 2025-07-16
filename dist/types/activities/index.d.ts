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
import { GetActivityRequest, GetActivityResponse, GetPortfolioActivitiesRequest, GetPortfolioActivityResponse, ListPortfolioActivitiesRequest, ListPortfolioActivitiesResponse, ListEntityActivitiesRequest, ListEntityActivitiesResponse } from './types';
export interface IActivitiesService {
    getActivity(request: GetActivityRequest): Promise<GetActivityResponse>;
    getPortfolioActivity(request: GetPortfolioActivitiesRequest): Promise<GetPortfolioActivityResponse>;
    listEntityActivities(request: ListEntityActivitiesRequest): Promise<ListEntityActivitiesResponse>;
    listPortfolioActivities(request: ListPortfolioActivitiesRequest): Promise<ListPortfolioActivitiesResponse>;
}
export declare class ActivitiesService implements IActivitiesService {
    private client;
    constructor(client: CoinbasePrimeClient);
    getActivity(request: GetActivityRequest, options?: CoinbaseCallOptions): Promise<GetActivityResponse>;
    getPortfolioActivity(request: GetPortfolioActivitiesRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioActivityResponse>;
    listEntityActivities(request: ListEntityActivitiesRequest, options?: CoinbaseCallOptions): Promise<ListEntityActivitiesResponse>;
    listPortfolioActivities(request: ListPortfolioActivitiesRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioActivitiesResponse>;
}
