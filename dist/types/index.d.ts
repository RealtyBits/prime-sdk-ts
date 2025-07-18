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
export { CoinbasePrimeClient } from './client';
export { CoinbasePrimeCredentials } from './credentials';
export { ActivitiesService, IActivitiesService } from './activities';
export { AddressBooksService, IAddressBooksService } from './addressBooks';
export { AllocationService, IAllocationService } from './allocations';
export { AssetsService, IAssetsService } from './assets';
export { BalancesService, IBalancesService } from './balances';
export { CommissionService, ICommissionService } from './commission';
export { FuturesService, IFuturesService } from './futures';
export { InvoicesService, IInvoicesService } from './invoices';
export { OnchainAddressBookService } from './onchainAddressBook';
export { OrdersService, IOrdersService } from './orders';
export { PaymentMethodsService, IPaymentMethodsService, } from './paymentMethods';
export { PortfoliosService, IPortfoliosService } from './portfolios';
export { PositionsService, IPositionsService } from './positions';
export { ProductsService, IProductsService } from './products';
export { StakingService, IStakingService } from './staking';
export { TransactionsService, ITransactionsService } from './transactions';
export { UsersService, IUsersService } from './users';
export { WalletsService, IWalletsService } from './wallets';
export type * from './model/';
export * from './model/enums/';
export type { GetActivityRequest, GetActivityResponse, GetPortfolioActivitiesRequest, GetPortfolioActivityResponse, ListEntityActivitiesRequest, ListEntityActivitiesResponse, ListPortfolioActivitiesRequest, ListPortfolioActivitiesResponse, } from './activities/types';
export type { CreateAddressBookRequest, CreateAddressBookResponse, ListAddressBooksRequest, ListAddressBooksResponse, } from './addressBooks/types';
export type { CreateAllocationRequest, CreateAllocationResponse, CreateNetAllocationRequest, CreateNetAllocationResponse, ListNetAllocationsRequest, ListNetAllocationsResponse, ListPortfolioAllocationsRequest, ListPortfolioAllocationsResponse, GetAllocationRequest, GetAllocationResponse, } from './allocations/types';
export type { ListAssetsRequest, ListAssetsResponse } from './assets/types';
export type { GetWalletBalanceRequest, GetWalletBalanceResponse, ListOnchainWalletBalancesRequest, ListOnchainWalletBalancesResponse, ListPortfolioBalancesRequest, ListPortfolioBalancesResponse, ListEntityBalancesRequest, ListEntityBalancesResponse, } from './balances/types';
export type { GetPortfolioCommissionRequest, GetPortfolioCommissionResponse, } from './commission/types';
export type { ListExistingLocatesRequest, ListExistingLocatesResponse, ListInterestAccrualsRequest, ListInterestAccrualsResponse, ListPortfolioInterestAccrualsRequest, ListPortfolioInterestAccrualsResponse, ListMarginCallSummariesRequest, ListMarginCallSummariesResponse, ListMarginConversionsRequest, ListMarginConversionsResponse, GetEntityLocateAvailabilitiesRequest, GetEntityLocateAvailabilitiesResponse, GetMarginInformationRequest, GetMarginInformationResponse, GetPortfolioBuyingPowerRequest, GetPortfolioBuyingPowerResponse, GetPortfolioCreditInformationRequest, GetPortfolioCreditInformationResponse, GetPortfolioWithdrawalPowerRequest, GetPortfolioWithdrawalPowerResponse, GetTieredPricingFeesRequest, GetTieredPricingFeesResponse, CreateNewLocatesRequest, CreateNewLocatesResponse, } from './financing/types';
export type { CancelEntitySweepRequest, CancelEntitySweepResponse, GetEntityFuturesBalanceRequest, GetEntityFuturesBalanceResponse, GetEntityFuturesPositionsRequest, GetEntityFuturesPositionsResponse, ListEntityFuturesSweepsRequest, ListEntityFuturesSweepsResponse, ScheduleEntityFuturesSweepRequest, ScheduleEntityFuturesSweepResponse, UpdateEntityFuturesAutoSweepRequest, UpdateEntityFuturesAutoSweepResponse, } from './futures/types';
export type { ListInvoicesRequest, ListInvoicesResponse, } from './invoices/types';
export type { CreateOnchainAddressBookEntryRequest, CreateOnchainAddressBookEntryResponse, DeleteOnchainAddressBookEntryRequest, DeleteOnchainAddressBookEntryResponse, ListOnchainAddressBookRequest, ListOnchainAddressBookResponse, UpdateOnchainAddressBookEntryRequest, UpdateOnchainAddressBookEntryResponse, } from './onchainAddressBook/types';
export type { AcceptQuoteRequest, AcceptQuoteResponse, CancelOrderRequest, CancelOrderResponse, CreateOrderPreviewRequest, CreateOrderPreviewResponse, CreateOrderRequest, CreateOrderResponse, CreateQuoteRequest, CreateQuoteResponse, GetOrderRequest, GetOrderResponse, ListOpenOrdersRequest, ListOpenOrdersResponse, ListOrderFillsRequest, ListOrderFillsResponse, ListPortfolioFillsRequest, ListPortfolioFillsResponse, ListPortfolioOrdersRequest, ListPortfolioOrdersResponse, } from './orders/types';
export type { GetPaymentMethodRequest, GetPaymentMethodResponse, ListEntityPaymentMethodsRequest, ListEntityPaymentMethodsResponse, } from './paymentMethods/types';
export type { ListPortfoliosRequest, ListPortfoliosResponse, GetPortfolioCreditRequest, GetPortfolioCreditResponse, GetPortfolioRequest, GetPortfolioResponse, } from './portfolios/types';
export type { ListAggregateEntityPositionsRequest, ListAggregateEntityPositionsResponse, ListEntityPositionsRequest, ListEntityPositionsResponse, } from './positions/types';
export type { ListProductsRequest, ListProductsResponse, } from './products/types';
export type { CreateStakeRequest, CreateStakeResponse, CreateUnstakeRequest, CreateUnstakeResponse, } from './staking/types';
export type { CreateConversionRequest, CreateConversionResponse, CreateOnchainTransactionRequest, CreateOnchainTransactionResponse, CreateTransferRequest, CreateTransferResponse, CreateWithdrawalRequest, CreateWithdrawalResponse, GetTransactionRequest, GetTransactionResponse, ListPortfolioTransactionsRequest, ListPortfolioTransactionsResponse, ListWalletTransactionsRequest, ListWalletTransactionsResponse, } from './transactions/types';
export type { ListPortfolioUsersRequest, ListPortfolioUsersResponse, ListUsersRequest, ListUsersResponse, } from './users/types';
export type { CreateWalletRequest, CreateWalletResponse, CreateWalletDepositAddressRequest, CreateWalletDepositAddressResponse, GetWalletDepositInstructionsRequest, GetWalletDepositInstructionsResponse, GetWalletRequest, GetWalletResponse, ListWalletAddressesRequest, ListWalletAddressesResponse, ListWalletsRequest, ListWalletsResponse, } from './wallets/types';
