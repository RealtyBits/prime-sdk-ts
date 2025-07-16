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
import { CoinbasePrimeClient } from 'src/client';
/**
 * Base type for paginated requests
 */
export type BasePaginatedRequest = {
    cursor?: string;
    limit?: number;
};
/**
 * API call signature for paginated endpoints
 */
export type ApiCall<TRequest extends BasePaginatedRequest, TResponse> = (request: TRequest, options?: CoinbaseCallOptions) => Promise<TResponse>;
/**
 * Configuration for pagination behavior
 */
export interface PaginationConfig {
    defaultLimit?: number;
    maxPages?: number;
    maxItems?: number;
}
/**
 * Function to extract data array from response
 */
export type DataExtractor<TResponse, TData> = (response: TResponse) => TData[];
/**
 * Interface for pagination methods that will be added to response objects
 */
export interface PaginatedResponseMethods<TRequest extends BasePaginatedRequest, TResponse, TData> {
    __apiCall: ApiCall<TRequest, TResponse & PaginatedResponseMethods<TRequest, TResponse, TData>>;
    __baseRequest: Omit<TRequest, 'cursor'>;
    __dataExtractor: DataExtractor<TResponse, TData>;
    __config: PaginationConfig;
    __currentPage: number;
    __totalItemsFetched: number;
    /**
     * Check if there are more pages available
     */
    hasNext(): boolean;
    /**
     * Get the next cursor
     */
    getNextCursor(): string | undefined;
    /**
     * Fetch the next page
     */
    next(options?: CoinbaseCallOptions): Promise<(TResponse & PaginatedResponseMethods<TRequest, TResponse, TData>) | null>;
    /**
     * Fetch all remaining pages and return combined data
     */
    fetchAll(options?: CoinbaseCallOptions, progressCallback?: (page: number, totalItems: number) => void): Promise<TData[]>;
}
/**
 * Factory function to create enhanced response objects with pagination methods
 */
export declare function createPaginatedResponse<TRequest extends BasePaginatedRequest, TResponse, TData>(responseData: TResponse, apiCall: ApiCall<TRequest, TResponse & PaginatedResponseMethods<TRequest, TResponse, TData>>, baseRequest: Omit<TRequest, 'cursor'>, dataExtractor: DataExtractor<TResponse, TData>, options?: CoinbaseCallOptions): TResponse & PaginatedResponseMethods<TRequest, TResponse, TData>;
/**
 * Common data extractors for typical API responses
 */
export declare const ResponseExtractors: {
    activities: <T>(response: {
        activities?: T[];
    }) => T[];
    addresses: <T>(response: {
        addresses?: T[];
    }) => T[];
    allocations: <T>(response: {
        allocations?: T[];
    }) => T[];
    balances: <T>(response: {
        balances?: T[];
    }) => T[];
    fills: <T>(response: {
        fills?: T[];
    }) => T[];
    invoices: <T>(response: {
        invoices?: T[];
    }) => T[];
    orders: <T>(response: {
        orders?: T[];
    }) => T[];
    positions: <T>(response: {
        positions?: T[];
    }) => T[];
    products: <T>(response: {
        products?: T[];
    }) => T[];
    portfolios: <T>(response: {
        portfolios?: T[];
    }) => T[];
    transactions: <T>(response: {
        transactions?: T[];
    }) => T[];
    users: <T>(response: {
        users?: T[];
    }) => T[];
    wallets: <T>(response: {
        wallets?: T[];
    }) => T[];
};
/**
 * Get the default pagination options for a client
 */
export declare function getDefaultPaginationOptions(client: CoinbasePrimeClient, options: CoinbaseCallOptions | undefined): CoinbaseCallOptions;
export declare function getQueryParams(client: CoinbasePrimeClient, request: BasePaginatedRequest): Record<string, string | number | string[]>;
