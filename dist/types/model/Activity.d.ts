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
import { ActivityCategory } from './enums/ActivityCategory';
import { ActivityMetadataAccount } from './ActivityMetadataAccount';
import { ActivityMetadataTransactions } from './ActivityMetadataTransactions';
import { ActivitySecondaryType } from './enums/ActivitySecondaryType';
import { ActivityStatus } from './enums/ActivityStatus';
import { ActivityType } from './enums/PrimeActivityType';
import { HierarchyType } from './enums/HierarchyType';
import { UserAction } from './UserAction';
export type Activity = {
    /**
     * A unique id for the account activity
     */
    id?: string;
    /**
     * A reference for orders and transactions, n/a for other category types
     */
    referenceId?: string;
    category?: ActivityCategory;
    type?: ActivityType;
    secondaryType?: ActivitySecondaryType;
    status?: ActivityStatus;
    /**
     * Id of user who created the activity
     */
    createdBy?: string;
    /**
     * Title of the activity
     */
    title?: string;
    /**
     * Description detail of the activity
     */
    description?: string;
    /**
     * Actions related to the Activity
     */
    userActions?: Array<UserAction>;
    transactionsMetadata?: ActivityMetadataTransactions;
    accountMetadata?: ActivityMetadataAccount;
    ordersMetadata?: object;
    /**
     * List of currencies included in an activity
     */
    symbols?: Array<string>;
    /**
     * Time activity was created at
     */
    createdAt?: string;
    /**
     * Time for latest status update of account activity
     */
    updatedAt?: string;
    hierarchyType?: HierarchyType;
};
