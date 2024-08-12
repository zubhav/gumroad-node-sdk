import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get } from '../api';

export type Subscriber = {
  id: string;
  product_id: string;
  product_name: string;
  user_id: string;
  user_email: string;
  purchase_ids: string[];
  created_at: string;
  user_requested_cancellation_at: string | null;
  charge_occurrence_count: number | null;
  recurrence: string;
  cancelled_at: string | null;
  ended_at: string | null;
  failed_at: string | null;
  free_trial_ends_at: string | null;
  license_key: string;
  status: string;
};

export type SubscribersResponse = {
  success: boolean;
  subscribers: Subscriber[];
};

export type SubscriberResponse = {
  success: boolean;
  subscriber: Subscriber;
};

export async function getSubscribers({
  accessToken,
  productId,
  email,
}: {
  accessToken: string;
  productId: string;
  email?: string;
}): Promise<SubscribersResponse> {
  const response = await get<SubscribersResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/subscribers`,
    queryParams: { access_token: accessToken, email },
  });
  return response.data;
}

export async function getSubscriber({
  accessToken,
  subscriberId,
}: {
  accessToken: string;
  subscriberId: string;
}): Promise<SubscriberResponse> {
  const response = await get<SubscriberResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/subscribers/${subscriberId}`,
    queryParams: { access_token: accessToken },
  });
  return response.data;
}
