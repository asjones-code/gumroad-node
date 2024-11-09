// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class ResourceSubscriptions extends APIResource {
  /**
   * Show all active subscriptions of user for the input resource.
   */
  list(query: ResourceSubscriptionListParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/resource_subscriptions', { query, ...options, __binaryResponse: true });
  }

  /**
   * Subscribe to a resource. Currently there are 5 supported resource names -
   * "sale", "refund", "dispute", "dispute_won", and "cancellation". sale - When
   * subscribed to this resource, you will be notified of the user's sales with an
   * HTTP POST to your post_url. The format of the POST is described on the Gumroad
   * Ping page.refund - When subscribed to this resource, you will be notified of
   * refunds to the user's sales with an HTTP POST to your post_url. The format of
   * the POST is same as described on the Gumroad Ping page.dispute - When subscribed
   * to this resource, you will be notified of the disputes raised against user's
   * sales with an HTTP POST to your post_url. The format of the POST is described on
   * the Gumroad Ping page.dispute_won - When subscribed to this resource, you will
   * be notified of the sale disputes won by the user with an HTTP POST to your
   * post_url. The format of the POST is described on the Gumroad Ping
   * page.cancellation - When subscribed to this resource, you will be notified of
   * cancellations of the user's subscribers with an HTTP POST to your post_url.In
   * each POST request, Gumroad sends these parameters: subscription_id: id of the
   * subscription product_id: id of the product product_name: name of the product
   * user_id: user id of the subscriber user_email: email address of the subscriber
   * purchase_ids: array of charge ids belonging to this subscription created_at:
   * timestamp when subscription was created charge_occurrence_count: number of
   * charges made for this subscription recurrence: subscription duration -
   * monthly/quarterly/biannually/yearly cancelled: true if subscription has been
   * cancelled, otherwise false cancelled_at: timestamp at which subscription was
   * cancelled cancelled_by_admin: true if subscription was been cancelled by admin,
   * otherwise not present cancelled_by_buyer: true if subscription was been
   * cancelled by buyer, otherwise not present cancelled_by_seller: true if
   * subscription was been cancelled by seller, otherwise not present
   * cancelled_due_to_payment_failures: true if subscription was been cancelled
   * automatically because of payment failure, otherwise not present
   */
  subscribe(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put('/resource_subscriptions', { ...options, __binaryResponse: true });
  }

  /**
   * Unsubscribe from a resource.
   */
  unsubscribe(resourceSubscriptionId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete(`/resource_subscriptions/${resourceSubscriptionId}`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ResourceSubscriptionListParams {
  resource_name: string;
}

export declare namespace ResourceSubscriptions {
  export { type ResourceSubscriptionListParams as ResourceSubscriptionListParams };
}
