// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource products', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('disable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.disable('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('enable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.enable('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });
});
