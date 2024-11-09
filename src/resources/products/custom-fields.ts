// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class CustomFields extends APIResource {
  /**
   * Create a new custom field for a product.
   */
  create(
    productId: string,
    body: CustomFieldCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/products/${productId}/custom_fields`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit an existing product's custom field.
   */
  update(
    productId: string,
    name: string,
    body: CustomFieldUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/products/${productId}/custom_fields/${name}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all of the existing custom fields for a product.
   */
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/custom_fields`, { ...options, __binaryResponse: true });
  }

  /**
   * Permanently delete a product's custom field.
   */
  delete(productId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete(`/products/${productId}/custom_fields/${name}`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface CustomFieldCreateParams {
  name: string;

  required: boolean;

  variant: string;
}

export interface CustomFieldUpdateParams {
  required: boolean;

  variant: string;
}

export declare namespace CustomFields {
  export {
    type CustomFieldCreateParams as CustomFieldCreateParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };
}
