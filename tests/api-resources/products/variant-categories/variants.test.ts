// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gumroad from 'gumroad';

const client = new Gumroad({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource variants', () => {
  test('create: required and optional params', async () => {
    const response = await client.products.variantCategories.variants.create(
      'product_id',
      'variant_category_id',
      { name: 'name', price_difference_cents: 0, variant: 'variant', max_purchase_count: 0 },
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.variants.retrieve('product_id', 'variant_category_id', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('update: required and optional params', async () => {
    const response = await client.products.variantCategories.variants.update(
      'product_id',
      'variant_category_id',
      'id',
      { name: 'name', price_difference_cents: 0, variant: 'variant', max_purchase_count: 0 },
    );
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.variants.list('product_id', 'variant_category_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.variantCategories.variants.delete('product_id', 'variant_category_id', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Gumroad.NotFoundError);
  });
});
