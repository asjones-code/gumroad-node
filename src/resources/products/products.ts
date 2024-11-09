// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CustomFieldsAPI from './custom-fields';
import { CustomFieldCreateParams, CustomFieldUpdateParams, CustomFields } from './custom-fields';
import * as OfferCodesAPI from './offer-codes';
import { OfferCodeCreateParams, OfferCodeUpdateParams, OfferCodes } from './offer-codes';
import * as SubscribersAPI from './subscribers';
import { SubscriberListParams, Subscribers } from './subscribers';
import * as VariantCategoriesAPI from './variant-categories/variant-categories';
import {
  VariantCategories,
  VariantCategoryCreateParams,
  VariantCategoryUpdateParams,
} from './variant-categories/variant-categories';
import { type Response } from '../../_shims/index';

export class Products extends APIResource {
  variantCategories: VariantCategoriesAPI.VariantCategories = new VariantCategoriesAPI.VariantCategories(
    this._client,
  );
  offerCodes: OfferCodesAPI.OfferCodes = new OfferCodesAPI.OfferCodes(this._client);
  customFields: CustomFieldsAPI.CustomFields = new CustomFieldsAPI.CustomFields(this._client);
  subscribers: SubscribersAPI.Subscribers = new SubscribersAPI.Subscribers(this._client);

  /**
   * Retrieve the details of a product.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/products/${id}`, { ...options, __binaryResponse: true });
  }

  /**
   * Retrieve all of the existing products for the authenticated user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/products', { ...options, __binaryResponse: true });
  }

  /**
   * Permanently delete a product.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete(`/products/${id}`, { ...options, __binaryResponse: true });
  }

  /**
   * Disable an existing product.
   */
  disable(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put(`/products/${id}/disable`, { ...options, __binaryResponse: true });
  }

  /**
   * Enable an existing product.
   */
  enable(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put(`/products/${id}/enable`, { ...options, __binaryResponse: true });
  }
}

Products.VariantCategories = VariantCategories;
Products.OfferCodes = OfferCodes;
Products.CustomFields = CustomFields;
Products.Subscribers = Subscribers;

export declare namespace Products {
  export {
    VariantCategories as VariantCategories,
    type VariantCategoryCreateParams as VariantCategoryCreateParams,
    type VariantCategoryUpdateParams as VariantCategoryUpdateParams,
  };

  export {
    OfferCodes as OfferCodes,
    type OfferCodeCreateParams as OfferCodeCreateParams,
    type OfferCodeUpdateParams as OfferCodeUpdateParams,
  };

  export {
    CustomFields as CustomFields,
    type CustomFieldCreateParams as CustomFieldCreateParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };

  export { Subscribers as Subscribers, type SubscriberListParams as SubscriberListParams };
}
