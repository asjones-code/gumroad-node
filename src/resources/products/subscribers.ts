// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Subscribers extends APIResource {
  /**
   * Retrieves all of the active subscribers for one of the authenticated user's
   * products.
   */
  list(
    productId: string,
    query?: SubscriberListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(
    productId: string,
    query: SubscriberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.list(productId, {}, query);
    }
    return this._client.get(`/products/${productId}/subscribers`, {
      query,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface SubscriberListParams {
  email?: string;
}

export declare namespace Subscribers {
  export { type SubscriberListParams as SubscriberListParams };
}
