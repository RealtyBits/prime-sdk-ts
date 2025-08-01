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
require('dotenv').config();
const {
  CoinbasePrimeClient,
  CoinbasePrimeCredentials,
  AllocationService,
} = require('../dist');

const creds = JSON.parse(process.env.PRIME_CREDENTIALS);
const baseUrl = process.env.BASE_URL;
const portfolioId = process.env.PORTFOLIO_ID;

const credentials = new CoinbasePrimeCredentials(
  creds.AccessKey,
  creds.SecretKey,
  creds.Passphrase
);

const client = new CoinbasePrimeClient(credentials, baseUrl);

const startDate = process.argv[2] || '2025-01-01';

const allocationService = new AllocationService(client);
allocationService
  .listPortfolioAllocations({
    portfolioId,
    startDate,
  })
  .then((allocations) => {
    console.log(allocations);
  })
  .catch((err) => console.log(err));
