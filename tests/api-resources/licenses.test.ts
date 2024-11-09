// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource licenses', () => {
  test('disable: required and optional params', async () => {
    const response = await client.licenses.disable({
      license_key: 'license_key',
      product_permalink: 'product_permalink',
    });
  });

  test('enable: required and optional params', async () => {
    const response = await client.licenses.enable({
      license_key: 'license_key',
      product_permalink: 'product_permalink',
    });
  });

  test('verify: required and optional params', async () => {
    const response = await client.licenses.verify({
      license_key: 'license_key',
      product_permalink: 'product_permalink',
      increment_uses_count: true,
    });
  });
});
