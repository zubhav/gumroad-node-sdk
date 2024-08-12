import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, put, remove } from '../api';

export type ResourceName =
  | 'sale'
  | 'refund'
  | 'dispute'
  | 'dispute_won'
  | 'cancellation'
  | 'subscription_updated'
  | 'subscription_ended'
  | 'subscription_restarted';

export type ResourceSubscription = {
  id: string;
  resource_name: ResourceName;
  post_url: string;
};

export type ResourceSubscriptionResponse = {
  success: boolean;
  resource_subscription: ResourceSubscription;
};

export type ResourceSubscriptionsResponse = {
  success: boolean;
  resource_subscriptions: ResourceSubscription[];
};

export type DeleteResourceSubscriptionResponse = {
  success: boolean;
  message: string;
};

export async function subscribeToResource({
  accessToken,
  resourceName,
  postUrl,
}: {
  accessToken: string;
  resourceName: ResourceName;
  postUrl: string;
}): Promise<ResourceSubscriptionResponse> {
  const response = await put<ResourceSubscriptionResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/resource_subscriptions`,
    queryParams: { access_token: accessToken },
    data: { resource_name: resourceName, post_url: postUrl },
  });
  return response.data;
}

export async function getResourceSubscriptions({
  accessToken,
  resourceName,
}: {
  accessToken: string;
  resourceName: ResourceName;
}): Promise<ResourceSubscriptionsResponse> {
  const response = await get<ResourceSubscriptionsResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/resource_subscriptions`,
    queryParams: { access_token: accessToken, resource_name: resourceName },
  });
  return response.data;
}

export async function unsubscribeFromResource({
  accessToken,
  resourceSubscriptionId,
}: {
  accessToken: string;
  resourceSubscriptionId: string;
}): Promise<DeleteResourceSubscriptionResponse> {
  const response = await remove<DeleteResourceSubscriptionResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/resource_subscriptions/${resourceSubscriptionId}`,
    queryParams: { access_token: accessToken },
  });
  return response.data;
}
