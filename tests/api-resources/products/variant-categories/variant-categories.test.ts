// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad-stainless';

const client = new Gumroad({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variantCategories', () => {
  test('create: required and optional params', async () => {
    const response = await client.products.variantCategories.create('product_id', {
      title: 'title',
      variant_category: 'variant_category',
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.retrieve('product_id', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('update: required and optional params', async () => {
    const response = await client.products.variantCategories.update('product_id', 'id', {
      title: 'title',
      variant_category: 'variant_category',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.list('product_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.delete('product_id', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
