// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { type Response } from '../../../_shims/index';

export class Variants extends APIResource {
  /**
   * Create a new variant of a product.
   */
  create(
    productId: string,
    variantCategoryId: string,
    body: VariantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/products/${productId}/variant_categories/${variantCategoryId}/variants`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the details of a variant of a product.
   */
  retrieve(
    productId: string,
    variantCategoryId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/variant_categories/${variantCategoryId}/variants/${id}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit a variant of an existing product.
   */
  update(
    productId: string,
    variantCategoryId: string,
    id: string,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/products/${productId}/variant_categories/${variantCategoryId}/variants/${id}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all of the existing variants in a variant category.
   */
  list(
    productId: string,
    variantCategoryId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/variant_categories/${variantCategoryId}/variants`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Permanently delete a variant of a product.
   */
  delete(
    productId: string,
    variantCategoryId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.delete(
      `/products/${productId}/variant_categories/${variantCategoryId}/variants/${id}`,
      { ...options, __binaryResponse: true },
    );
  }
}

export interface VariantCreateParams {
  name: string;

  price_difference_cents: number;

  variant: string;

  max_purchase_count?: number;
}

export interface VariantUpdateParams {
  name: string;

  price_difference_cents: number;

  variant: string;

  max_purchase_count?: number;
}

export declare namespace Variants {
  export { type VariantCreateParams as VariantCreateParams, type VariantUpdateParams as VariantUpdateParams };
}
