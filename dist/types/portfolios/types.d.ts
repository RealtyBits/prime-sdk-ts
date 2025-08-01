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
import { Brand } from '../shared/brand';
import { GetPortfolioResponse as internalGet, GetPortfoliosResponse, GetPostTradeCreditResponse } from '../model/';
export type GetPortfolioRequest = {
    /**
     * The portfolio ID.
     */
    portfolioId: string;
};
export type GetPortfolioResponse = Brand<internalGet, 'GetPortfolioResponse'>;
export type ListPortfoliosRequest = Record<string, never>;
export type ListPortfoliosResponse = Brand<GetPortfoliosResponse, 'ListPortfoliosResponse'>;
export type GetPortfolioCreditRequest = {
    portfolioId: string;
};
export type GetPortfolioCreditResponse = Brand<GetPostTradeCreditResponse, 'GetPortfolioCreditResponse'>;
