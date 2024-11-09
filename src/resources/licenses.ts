// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Licenses extends APIResource {
  /**
   * Disable a license
   */
  disable(body: LicenseDisableParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put('/licenses/disable', { body, ...options, __binaryResponse: true });
  }

  /**
   * Enable a license
   */
  enable(body: LicenseEnableParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put('/licenses/enable', { body, ...options, __binaryResponse: true });
  }

  /**
   * Verify a license
   */
  verify(body: LicenseVerifyParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/licenses/verify', { body, ...options, __binaryResponse: true });
  }
}

export interface LicenseDisableParams {
  license_key: string;

  product_permalink: string;
}

export interface LicenseEnableParams {
  license_key: string;

  product_permalink: string;
}

export interface LicenseVerifyParams {
  license_key: string;

  product_permalink: string;

  increment_uses_count?: boolean;
}

export declare namespace Licenses {
  export {
    type LicenseDisableParams as LicenseDisableParams,
    type LicenseEnableParams as LicenseEnableParams,
    type LicenseVerifyParams as LicenseVerifyParams,
  };
}
