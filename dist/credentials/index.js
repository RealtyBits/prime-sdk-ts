"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbasePrimeCredentials = void 0;
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
const constants_1 = require("../constants");
const crypto = __importStar(require("crypto"));
class CoinbasePrimeCredentials {
    constructor(key, secret, passphrase) {
        if (!key || !secret || !passphrase) {
            console.log('Could not authenticate. Only public endpoints accessible.');
        }
        this.accessKey = key;
        this.secretKey = secret;
        this.passphrase = passphrase;
    }
    generateAuthHeaders(requestMethod, uri, body) {
        if (!this.secretKey || !this.accessKey || !this.passphrase) {
            return {};
        }
        const timestamp = Math.floor(Date.now() / 1000);
        const message = timestamp + requestMethod + new URL(uri).pathname + (body || '');
        const signature = crypto
            .createHmac('sha256', this.secretKey)
            .update(message)
            .digest('base64');
        return {
            [constants_1.CB_ACCESS_TIMESTAMP_HEADER]: timestamp.toString(),
            [constants_1.CB_ACCESS_SIGNATURE_HEADER]: signature,
            [constants_1.CB_ACCESS_KEY_HEADER]: this.accessKey,
            [constants_1.CB_ACCESS_PHRASE_HEADER]: this.passphrase,
        };
    }
}
exports.CoinbasePrimeCredentials = CoinbasePrimeCredentials;
