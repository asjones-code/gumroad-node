// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VariantsAPI from './variants';
import { VariantCreateParams, VariantUpdateParams, Variants } from './variants';
import { type Response } from '../../../_shims/index';

export class VariantCategories extends APIResource {
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);

  /**
   * Create a new variant category on a product.
   */
  create(
    productId: string,
    body: VariantCategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/products/${productId}/variant_categories`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the details of a variant category of a product.
   */
  retrieve(productId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/variant_categories/${id}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit a variant category of an existing product.
   */
  update(
    productId: string,
    id: string,
    body: VariantCategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/products/${productId}/variant_categories/${id}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all of the existing variant categories of a product.
   */
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/variant_categories`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Permanently delete a variant category of a product.
   */
  delete(productId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete(`/products/${productId}/variant_categories/${id}`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface VariantCategoryCreateParams {
  title: string;

  variant_category: string;
}

export interface VariantCategoryUpdateParams {
  title: string;

  variant_category: string;
}

VariantCategories.Variants = Variants;

export declare namespace VariantCategories {
  export {
    type VariantCategoryCreateParams as VariantCategoryCreateParams,
    type VariantCategoryUpdateParams as VariantCategoryUpdateParams,
  };

  export {
    Variants as Variants,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
  };
}
