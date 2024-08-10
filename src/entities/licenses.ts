import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { post, put, ApiResponse } from '../api';

export type Card = {
  visual: string | null;
  type: string | null;
};

export type Purchase = {
  seller_id: string;
  product_id: string;
  product_name: string;
  permalink: string;
  product_permalink: string;
  email: string;
  price: number;
  gumroad_fee: number;
  currency: string;
  quantity: number;
  discover_fee_charged: boolean;
  can_contact: boolean;
  referrer: string;
  card: Card;
  order_number: number;
  sale_id: string;
  sale_timestamp: string;
  purchaser_id: string;
  subscription_id: string;
  variants: string;
  license_key: string;
  is_multiseat_license: boolean;
  ip_country: string;
  recurrence: string;
  is_gift_receiver_purchase: boolean;
  refunded: boolean;
  disputed: boolean;
  dispute_won: boolean;
  id: string;
  created_at: string;
  custom_fields: any[];
  chargebacked: boolean;
  subscription_ended_at: string | null;
  subscription_cancelled_at: string | null;
  subscription_failed_at: string | null;
};

export type LicenseResponse = {
  success: boolean;
  uses: number;
  purchase: Purchase;
};

export async function verifyLicense({
  productId,
  licenseKey,
  incrementUsesCount = true,
}: {
  productId: string;
  licenseKey: string;
  incrementUsesCount?: boolean;
}): Promise<ApiResponse<LicenseResponse>> {
  return post<LicenseResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/licenses/verify`,
    data: {
      product_id: productId,
      license_key: licenseKey,
      increment_uses_count: incrementUsesCount.toString(),
    },
  });
}

export async function enableLicense({
  accessToken,
  productId,
  licenseKey,
}: {
  accessToken: string;
  productId: string;
  licenseKey: string;
}): Promise<ApiResponse<LicenseResponse>> {
  return put<LicenseResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/licenses/enable`,
    queryParams: { access_token: accessToken },
    data: { product_id: productId, license_key: licenseKey },
  });
}

export async function disableLicense({
  accessToken,
  productId,
  licenseKey,
}: {
  accessToken: string;
  productId: string;
  licenseKey: string;
}): Promise<ApiResponse<LicenseResponse>> {
  return put<LicenseResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/licenses/disable`,
    queryParams: { access_token: accessToken },
    data: { product_id: productId, license_key: licenseKey },
  });
}

export async function decrementLicenseUsesCount({
  accessToken,
  productId,
  licenseKey,
}: {
  accessToken: string;
  productId: string;
  licenseKey: string;
}): Promise<ApiResponse<LicenseResponse>> {
  return put<LicenseResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/licenses/decrement_uses_count`,
    queryParams: { access_token: accessToken },
    data: { product_id: productId, license_key: licenseKey },
  });
}
