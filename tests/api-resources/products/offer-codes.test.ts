// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offerCodes', () => {
  test('create: required and optional params', async () => {
    const response = await client.products.offerCodes.create('product_id', {
      amount_off: 0,
      name: 'name',
      universal: true,
      max_purchase_count: 0,
      offer_type: 'offer_type',
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.offerCodes.retrieve('product_id', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('update: required and optional params', async () => {
    const response = await client.products.offerCodes.update('product_id', 'id', {
      max_purchase_count: 0,
      offer_code: 'offer_code',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.offerCodes.list('product_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.offerCodes.delete('product_id', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
