// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceSubscriptions', () => {
  test('list: required and optional params', async () => {
    const response = await client.resourceSubscriptions.list({ resource_name: 'resource_name' });
  });

  test('subscribe: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.resourceSubscriptions.subscribe({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('unsubscribe: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.resourceSubscriptions.unsubscribe('resource_subscription_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
