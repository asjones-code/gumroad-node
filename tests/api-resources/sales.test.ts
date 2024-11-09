// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource sales', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sales.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('list: required and optional params', async () => {
    const response = await client.sales.list({
      page: 0,
      after: 'after',
      before: 'before',
      email: 'email',
      product_id: 'product_id',
    });
  });

  test('markAsShipped: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sales.markAsShipped('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('markAsShipped: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.markAsShipped(
        'id',
        { tracking_url: 'tracking_url' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('refund: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sales.refund('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Gumroad.NotFoundError,
    );
  });

  test('refund: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.refund('id', { amount_cents: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
