import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, put, ApiResponse } from '../api';

export type Sale = {
  id: string;
  email: string;
  seller_id: string;
  timestamp: string;
  daystamp: string;
  created_at: string;
  product_name: string;
  product_has_variants: boolean;
  price: number;
  gumroad_fee: number;
  subscription_duration: string | null;
  formatted_display_price: string;
  formatted_total_price: string;
  currency_symbol: string;
  amount_refundable_in_currency: string;
  product_id: string;
  product_permalink: string;
  partially_refunded: boolean;
  chargedback: boolean;
  purchase_email: string;
  zip_code: string;
  paid: boolean;
  has_variants: boolean;
  variants: { [key: string]: string };
  variants_and_quantity: string;
  has_custom_fields: boolean;
  custom_fields: { [key: string]: string };
  order_id: number;
  is_product_physical: boolean;
  purchaser_id: string;
  is_recurring_billing: boolean;
  can_contact: boolean;
  is_following: boolean;
  disputed: boolean;
  dispute_won: boolean;
  is_additional_contribution: boolean;
  discover_fee_charged: boolean;
  is_gift_sender_purchase: boolean;
  is_gift_receiver_purchase: boolean;
  referrer: string;
  card: {
    visual: string | null;
    type: string | null;
  };
  product_rating: number | null;
  reviews_count: number;
  average_rating: number;
  subscription_id?: string;
  cancelled?: boolean;
  ended?: boolean;
  recurring_charge?: boolean;
  license_key?: string;
  license_id?: string;
  license_disabled?: boolean;
  affiliate?: {
    email: string;
    amount: string;
  };
  quantity: number;
  offer_code?: {
    name: string;
    displayed_amount_off: string;
  };
  shipped?: boolean;
  tracking_url?: string;
  sku_id?: string;
  sku_external_id?: string;
};

export type SalesResponse = {
  success: boolean;
  next_page_url: string;
  next_page_key: string;
  sales: Sale[];
};

export type SaleResponse = {
  success: boolean;
  sale: Sale;
};

interface GetSalesParams {
  accessToken: string;
  after?: string;
  before?: string;
  product_id?: string;
  email?: string;
  order_id?: string;
  page_key?: string;
}

export async function getSales({
  accessToken,
  after,
  before,
  product_id,
  email,
  order_id,
  page_key,
}: GetSalesParams): Promise<ApiResponse<SalesResponse>> {
  return get<SalesResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/sales`,
    queryParams: {
      access_token: accessToken,
      after,
      before,
      product_id,
      email,
      order_id,
      page_key,
    },
  });
}

interface GetSaleParams {
  accessToken: string;
  saleId: string;
}

export async function getSale({
  accessToken,
  saleId,
}: GetSaleParams): Promise<ApiResponse<SaleResponse>> {
  return get<SaleResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/sales/${saleId}`,
    queryParams: { access_token: accessToken },
  });
}

interface MarkAsShippedParams {
  accessToken: string;
  saleId: string;
  tracking_url?: string;
}

export async function markAsShipped({
  accessToken,
  saleId,
  tracking_url,
}: MarkAsShippedParams): Promise<ApiResponse<SaleResponse>> {
  return put<SaleResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/sales/${saleId}/mark_as_shipped`,
    queryParams: { access_token: accessToken },
    data: { tracking_url },
  });
}

interface RefundSaleParams {
  accessToken: string;
  saleId: string;
  amount_cents?: number;
}

export async function refundSale({
  accessToken,
  saleId,
  amount_cents,
}: RefundSaleParams): Promise<ApiResponse<SaleResponse>> {
  return put<SaleResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/sales/${saleId}/refund`,
    queryParams: { access_token: accessToken },
    data: { amount_cents },
  });
}
