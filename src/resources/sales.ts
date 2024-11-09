// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Sales extends APIResource {
  /**
   * Retrieves the details of a sale by this user.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/sales/${id}`, { ...options, __binaryResponse: true });
  }

  /**
   * Retrieves all of the successful sales by the authenticated user.
   */
  list(query: SaleListParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/sales', { query, ...options, __binaryResponse: true });
  }

  /**
   * Marks a sale as shipped.
   */
  markAsShipped(
    id: string,
    body?: SaleMarkAsShippedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  markAsShipped(id: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  markAsShipped(
    id: string,
    body: SaleMarkAsShippedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(body)) {
      return this.markAsShipped(id, {}, body);
    }
    return this._client.put(`/sales/${id}/mark_as_shipped`, { body, ...options, __binaryResponse: true });
  }

  /**
   * Refunds a sale.
   */
  refund(id: string, body?: SaleRefundParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  refund(id: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  refund(
    id: string,
    body: SaleRefundParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(body)) {
      return this.refund(id, {}, body);
    }
    return this._client.put(`/sales/${id}/refund`, { body, ...options, __binaryResponse: true });
  }
}

export interface SaleListParams {
  page: number;

  after?: string;

  before?: string;

  email?: string;

  product_id?: string;
}

export interface SaleMarkAsShippedParams {
  tracking_url?: string;
}

export interface SaleRefundParams {
  amount_cents?: number;
}

export declare namespace Sales {
  export {
    type SaleListParams as SaleListParams,
    type SaleMarkAsShippedParams as SaleMarkAsShippedParams,
    type SaleRefundParams as SaleRefundParams,
  };
}
