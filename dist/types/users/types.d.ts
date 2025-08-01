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
import { GetEntityUsersResponse } from '../model/';
import { BasePaginatedRequest, PaginatedResponseMethods } from '../shared/paginatedResponse';
import { Pagination } from '../shared/pagination';
export type ListUsersRequest = Pagination & {
    entityId: string;
};
export type BaseListUsersResponse = Brand<GetEntityUsersResponse, 'ListUsersResponse'>;
export type ListUsersResponse = BaseListUsersResponse & PaginatedResponseMethods<ListUsersRequest & BasePaginatedRequest, BaseListUsersResponse, any>;
export type ListPortfolioUsersRequest = Pagination & {
    portfolioId: string;
};
export type BaseListPortfolioUsersResponse = Brand<GetEntityUsersResponse, 'ListPortfolioUsersResponse'>;
export type ListPortfolioUsersResponse = BaseListPortfolioUsersResponse & PaginatedResponseMethods<ListPortfolioUsersRequest & BasePaginatedRequest, BaseListPortfolioUsersResponse, any>;
