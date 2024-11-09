// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customFields', () => {
  test('create: required and optional params', async () => {
    const response = await client.products.customFields.create('product_id', {
      name: 'name',
      required: true,
      variant: 'variant',
    });
  });

  test('update: required and optional params', async () => {
    const response = await client.products.customFields.update('product_id', 'name', {
      required: true,
      variant: 'variant',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.customFields.list('product_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.customFields.delete('product_id', 'name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
