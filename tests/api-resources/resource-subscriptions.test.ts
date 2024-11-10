// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad-stainless';

const client = new Gumroad({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceSubscriptions', () => {
  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.resourceSubscriptions.update({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('list: required and optional params', async () => {
    const response = await client.resourceSubscriptions.list({ resource_name: 'resource_name' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.resourceSubscriptions.delete('resource_subscription_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
