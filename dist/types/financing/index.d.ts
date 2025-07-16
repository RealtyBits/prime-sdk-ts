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
import { ListExistingLocatesRequest, ListExistingLocatesResponse, ListInterestAccrualsRequest, ListInterestAccrualsResponse, ListPortfolioInterestAccrualsRequest, ListPortfolioInterestAccrualsResponse, ListMarginCallSummariesRequest, ListMarginCallSummariesResponse, ListMarginConversionsRequest, ListMarginConversionsResponse, GetEntityLocateAvailabilitiesRequest, GetEntityLocateAvailabilitiesResponse, GetMarginInformationRequest, GetMarginInformationResponse, GetPortfolioBuyingPowerRequest, GetPortfolioBuyingPowerResponse, GetPortfolioCreditInformationRequest, GetPortfolioCreditInformationResponse, GetPortfolioWithdrawalPowerRequest, GetPortfolioWithdrawalPowerResponse, GetTieredPricingFeesRequest, GetTieredPricingFeesResponse, CreateNewLocatesRequest, CreateNewLocatesResponse } from './types';
export interface IFinancingService {
    listExistingLocates(request: ListExistingLocatesRequest, options?: CoinbaseCallOptions): Promise<ListExistingLocatesResponse>;
    listInterestAccruals(request: ListInterestAccrualsRequest, options?: CoinbaseCallOptions): Promise<ListInterestAccrualsResponse>;
    listPortfolioInterestAccruals(request: ListPortfolioInterestAccrualsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioInterestAccrualsResponse>;
    listMarginCallSummaries(request: ListMarginCallSummariesRequest, options?: CoinbaseCallOptions): Promise<ListMarginCallSummariesResponse>;
    listMarginConversions(request: ListMarginConversionsRequest, options?: CoinbaseCallOptions): Promise<ListMarginConversionsResponse>;
    getEntityLocateAvailabilities(request: GetEntityLocateAvailabilitiesRequest, options?: CoinbaseCallOptions): Promise<GetEntityLocateAvailabilitiesResponse>;
    getMarginInformation(request: GetMarginInformationRequest, options?: CoinbaseCallOptions): Promise<GetMarginInformationResponse>;
    getPortfolioBuyingPower(request: GetPortfolioBuyingPowerRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioBuyingPowerResponse>;
    getPortfolioCreditInformation(request: GetPortfolioCreditInformationRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioCreditInformationResponse>;
    getPortfolioWithdrawalPower(request: GetPortfolioWithdrawalPowerRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioWithdrawalPowerResponse>;
    getTieredPricingFees(request: GetTieredPricingFeesRequest, options?: CoinbaseCallOptions): Promise<GetTieredPricingFeesResponse>;
    createNewLocates(request: CreateNewLocatesRequest, options?: CoinbaseCallOptions): Promise<CreateNewLocatesResponse>;
}
export declare class FinancingService implements IFinancingService {
    private client;
    constructor(client: CoinbasePrimeClient);
    listExistingLocates(request: ListExistingLocatesRequest, options?: CoinbaseCallOptions): Promise<ListExistingLocatesResponse>;
    listInterestAccruals(request: ListInterestAccrualsRequest, options?: CoinbaseCallOptions): Promise<ListInterestAccrualsResponse>;
    listPortfolioInterestAccruals(request: ListPortfolioInterestAccrualsRequest, options?: CoinbaseCallOptions): Promise<ListPortfolioInterestAccrualsResponse>;
    listMarginCallSummaries(request: ListMarginCallSummariesRequest, options?: CoinbaseCallOptions): Promise<ListMarginCallSummariesResponse>;
    listMarginConversions(request: ListMarginConversionsRequest, options?: CoinbaseCallOptions): Promise<ListMarginConversionsResponse>;
    getEntityLocateAvailabilities(request: GetEntityLocateAvailabilitiesRequest, options?: CoinbaseCallOptions): Promise<GetEntityLocateAvailabilitiesResponse>;
    getMarginInformation(request: GetMarginInformationRequest, options?: CoinbaseCallOptions): Promise<GetMarginInformationResponse>;
    getPortfolioBuyingPower(request: GetPortfolioBuyingPowerRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioBuyingPowerResponse>;
    getPortfolioCreditInformation(request: GetPortfolioCreditInformationRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioCreditInformationResponse>;
    getPortfolioWithdrawalPower(request: GetPortfolioWithdrawalPowerRequest, options?: CoinbaseCallOptions): Promise<GetPortfolioWithdrawalPowerResponse>;
    getTieredPricingFees(request: GetTieredPricingFeesRequest, options?: CoinbaseCallOptions): Promise<GetTieredPricingFeesResponse>;
    createNewLocates(request: CreateNewLocatesRequest, options?: CoinbaseCallOptions): Promise<CreateNewLocatesResponse>;
}
