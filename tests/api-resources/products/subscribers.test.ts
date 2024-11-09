// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscribers', () => {
  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.subscribers.list('product_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.subscribers.list(
        'product_id',
        { email: 'email' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
