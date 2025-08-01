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
import { AddressBookType } from './enums/AddressBookType';
import { DisplayUser } from './DisplayUser';
export type AddressBookEntry = {
    /**
     * UUID identifying this address book entry
     */
    id: string;
    /**
     * Currency symbol
     */
    currencySymbol?: string;
    /**
     * Name for this address book entry
     */
    name: string;
    /**
     * Cryptocurrency address
     */
    address?: string;
    /**
     * Memo or destination tag for currencies which support them
     */
    accountIdentifier?: string;
    /**
     * Name of the account identifier. For instance Destination Tag
     */
    accountIdentifierName?: string;
    /**
     * State of this address book entry
     */
    state: string;
    /**
     * Link to a blockchain explorer
     */
    explorerLink?: string;
    /**
     * When this entry was last used for a transaction
     */
    lastUsedAt?: Date;
    /**
     * When this entry was added to the address book
     */
    addedAt?: Date;
    addedBy: DisplayUser;
    type?: AddressBookType;
    /**
     * counterparty id
     */
    counterpartyId?: string;
};
