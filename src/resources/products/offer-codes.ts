// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class OfferCodes extends APIResource {
  /**
   * Create a new offer code for a product. Default offer code is in cents. A
   * universal offer code is one that applies to all products.
   */
  create(
    productId: string,
    body: OfferCodeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/products/${productId}/offer_codes`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve the details of a specific offer code of a product
   */
  retrieve(productId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/offer_codes/${id}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit an existing product's offer code.
   */
  update(
    productId: string,
    id: string,
    body: OfferCodeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/products/${productId}/offer_codes/${id}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all of the existing offer codes for a product. Either amount_cents or
   * percent_off will be returned depending if the offer code is a fixed amount off
   * or a percentage off. A universal offer code is one that applies to all products.
   */
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${productId}/offer_codes`, { ...options, __binaryResponse: true });
  }

  /**
   * Permanently delete a product's offer code.
   */
  delete(productId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete(`/products/${productId}/offer_codes/${id}`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface OfferCodeCreateParams {
  amount_off: number;

  name: string;

  universal: boolean;

  max_purchase_count?: number;

  offer_type?: string;
}

export interface OfferCodeUpdateParams {
  max_purchase_count: number;

  offer_code: string;
}

export declare namespace OfferCodes {
  export {
    type OfferCodeCreateParams as OfferCodeCreateParams,
    type OfferCodeUpdateParams as OfferCodeUpdateParams,
  };
}
