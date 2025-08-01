/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * This file is generated by Openapi Generator https://github.com/openapitools/openapi-generator
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
 *
 *  Do not edit the class manually.
 */
import { AllocationStatus } from './enums/AllocationStatus';
import { DestinationAlloc } from './DestinationAlloc';
import { OrderSide } from './enums/OrderSide';
export type Allocation = {
    /**
     * The ID that ties together an allocation and all of its legs.
     */
    rootId?: string;
    /**
     * The ID of the allocation if this allocation is a reversal. In this case, the root_id would be the original allocation ID.
     */
    reversalId?: string;
    /**
     * Time the final leg of the root allocation was completed.
     */
    allocationCompletedAt?: Date;
    /**
     * The ID of the user that created the allocation.
     */
    userId?: string;
    /**
     * The ID of the product of the orders allocated.
     */
    productId?: string;
    side?: OrderSide;
    /**
     * Price the allocation was done at.
     */
    avgPrice?: string;
    /**
     * Amount allocated in base asset units.
     */
    baseQuantity?: string;
    /**
     * Amount allocated in quote asset units.
     */
    quoteValue?: string;
    /**
     * Fees from original trade execution allocated in quote asset units.
     */
    feesAllocated?: string;
    status?: AllocationStatus;
    /**
     * Portfolio ID of the source portfolio.
     */
    source?: string;
    /**
     * All order IDs that were aggregated to calculate the avg_price, quantity to allocate in each leg. Each order_id should tie back to the single allocation root_id.
     */
    orderIds?: Array<string>;
    /**
     * Array of objects, each containing the leg ID, destination portfolio ID and amount in chosen units allocated to each portfolio: [{leg_id, portfolio_id, allocation_base, allocation_quote}, {leg_id, portfolio_id, allocation_base, allocation_quote}...]
     */
    destinations?: Array<DestinationAlloc>;
    /**
     * The netting ID of the allocation, not empty if the allocation was submitted as part of a net allocation
     */
    nettingId?: string;
};
