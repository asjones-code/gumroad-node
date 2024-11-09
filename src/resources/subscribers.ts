// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Subscribers extends APIResource {
  /**
   * Retrieves the details of a subscriber to this user's product.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/subscribers/${id}`, { ...options, __binaryResponse: true });
  }
}
