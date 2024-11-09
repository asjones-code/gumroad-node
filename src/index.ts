// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  LicenseDisableParams,
  LicenseEnableParams,
  LicenseVerifyParams,
  Licenses,
} from './resources/licenses';
import { ResourceSubscriptionListParams, ResourceSubscriptions } from './resources/resource-subscriptions';
import { SaleListParams, SaleMarkAsShippedParams, SaleRefundParams, Sales } from './resources/sales';
import { Subscribers } from './resources/subscribers';
import { Users } from './resources/users';
import { Products } from './resources/products/products';

export interface ClientOptions {
  /**
   * The client ID for OAuth2 authentication
   */
  clientId?: string | undefined;

  /**
   * The client secret for OAuth2 authentication
   */
  clientSecret?: string | undefined;

  /**
   * The token obtained for OAuth2 authentication
   */
  accessToken?: string | undefined;

  /**
   * The redirect URI used in the OAuth2 flow
   */
  redirectUri?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['GUMROAD_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Gumroad API.
 */
export class Gumroad extends Core.APIClient {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  redirectUri: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Gumroad API.
   *
   * @param {string | undefined} [opts.clientId=process.env['OAUTH_CLIENT_ID'] ?? undefined]
   * @param {string | undefined} [opts.clientSecret=process.env['OAUTH_CLIENT_SECRET'] ?? undefined]
   * @param {string | undefined} [opts.accessToken=process.env['OAUTH_ACCESS_TOKEN'] ?? undefined]
   * @param {string | null | undefined} [opts.redirectUri=process.env['OAUTH_REDIRECT_URI'] ?? null]
   * @param {string} [opts.baseURL=process.env['GUMROAD_BASE_URL'] ?? https://api.gumroad.com/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('GUMROAD_BASE_URL'),
    clientId = Core.readEnv('OAUTH_CLIENT_ID'),
    clientSecret = Core.readEnv('OAUTH_CLIENT_SECRET'),
    accessToken = Core.readEnv('OAUTH_ACCESS_TOKEN'),
    redirectUri = Core.readEnv('OAUTH_REDIRECT_URI') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (clientId === undefined) {
      throw new Errors.GumroadError(
        "The OAUTH_CLIENT_ID environment variable is missing or empty; either provide it, or instantiate the Gumroad client with an clientId option, like new Gumroad({ clientId: 'My Client ID' }).",
      );
    }
    if (clientSecret === undefined) {
      throw new Errors.GumroadError(
        "The OAUTH_CLIENT_SECRET environment variable is missing or empty; either provide it, or instantiate the Gumroad client with an clientSecret option, like new Gumroad({ clientSecret: 'My Client Secret' }).",
      );
    }
    if (accessToken === undefined) {
      throw new Errors.GumroadError(
        "The OAUTH_ACCESS_TOKEN environment variable is missing or empty; either provide it, or instantiate the Gumroad client with an accessToken option, like new Gumroad({ accessToken: 'My Access Token' }).",
      );
    }

    const options: ClientOptions = {
      clientId,
      clientSecret,
      accessToken,
      redirectUri,
      ...opts,
      baseURL: baseURL || `https://api.gumroad.com/v2`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
    this.redirectUri = redirectUri;
  }

  products: API.Products = new API.Products(this);
  users: API.Users = new API.Users(this);
  resourceSubscriptions: API.ResourceSubscriptions = new API.ResourceSubscriptions(this);
  sales: API.Sales = new API.Sales(this);
  subscribers: API.Subscribers = new API.Subscribers(this);
  licenses: API.Licenses = new API.Licenses(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Gumroad = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static GumroadError = Errors.GumroadError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  GumroadError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Gumroad.Products = Products;
Gumroad.Users = Users;
Gumroad.ResourceSubscriptions = ResourceSubscriptions;
Gumroad.Sales = Sales;
Gumroad.Subscribers = Subscribers;
Gumroad.Licenses = Licenses;

export declare namespace Gumroad {
  export type RequestOptions = Core.RequestOptions;

  export { Products as Products };

  export { Users as Users };

  export {
    ResourceSubscriptions as ResourceSubscriptions,
    type ResourceSubscriptionListParams as ResourceSubscriptionListParams,
  };

  export {
    Sales as Sales,
    type SaleListParams as SaleListParams,
    type SaleMarkAsShippedParams as SaleMarkAsShippedParams,
    type SaleRefundParams as SaleRefundParams,
  };

  export { Subscribers as Subscribers };

  export {
    Licenses as Licenses,
    type LicenseDisableParams as LicenseDisableParams,
    type LicenseEnableParams as LicenseEnableParams,
    type LicenseVerifyParams as LicenseVerifyParams,
  };
}

export default Gumroad;
