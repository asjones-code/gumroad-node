// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class User extends APIResource {
  /**
   * Retrieve the user's data.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/user', { ...options, __binaryResponse: true });
  }
}
