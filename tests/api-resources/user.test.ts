// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad-stainless';

const client = new Gumroad({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.user.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });
});
