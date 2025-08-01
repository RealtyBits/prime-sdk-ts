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
/**
 * - UNKNOWN_TIME_IN_FORCE: nil value  - GOOD_UNTIL_DATE_TIME: Expires at a certain date/time  - GOOD_UNTIL_CANCELLED: Order stays on the books until cancelled  - IMMEDIATE_OR_CANCEL: Order is executed immediately at submission or is cancelled  - FILL_OR_KILL: Order is executed immediately and fully at submission or is cancelled
 */
export declare enum TimeInForceType {
    UnknownTimeInForce = "UNKNOWN_TIME_IN_FORCE",
    GoodUntilDateTime = "GOOD_UNTIL_DATE_TIME",
    GoodUntilCancelled = "GOOD_UNTIL_CANCELLED",
    ImmediateOrCancel = "IMMEDIATE_OR_CANCEL",
    FillOrKill = "FILL_OR_KILL"
}
