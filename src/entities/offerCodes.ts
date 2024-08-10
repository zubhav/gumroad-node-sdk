import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, post, put, remove, ApiResponse } from '../api';

export type OfferCode = {
  id: string;
  name: string;
  amount_cents?: number;
  percent_off?: number;
  max_purchase_count: number | null;
  universal: boolean;
  times_used: number;
};

export type OfferCodesResponse = {
  success: boolean;
  offer_codes: OfferCode[];
};

export type OfferCodeResponse = {
  success: boolean;
  offer_code: OfferCode;
};

export type DeleteOfferCodeResponse = {
  success: boolean;
  message: string;
};

export async function getOfferCodes({
  accessToken,
  productId,
}: {
  accessToken: string;
  productId: string;
}): Promise<ApiResponse<OfferCodesResponse>> {
  return get<OfferCodesResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/offer_codes`,
    queryParams: { access_token: accessToken },
  });
}

export async function getOfferCode({
  accessToken,
  productId,
  offerCodeId,
}: {
  accessToken: string;
  productId: string;
  offerCodeId: string;
}): Promise<ApiResponse<OfferCodeResponse>> {
  return get<OfferCodeResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/offer_codes/${offerCodeId}`,
    queryParams: { access_token: accessToken },
  });
}

export async function createOfferCode({
  accessToken,
  productId,
  name,
  amount_off,
  offer_type = 'cents',
  max_purchase_count,
  universal = false,
}: {
  accessToken: string;
  productId: string;
  name: string;
  amount_off: number;
  offer_type?: 'cents' | 'percent';
  max_purchase_count?: number;
  universal?: boolean;
}): Promise<ApiResponse<OfferCodeResponse>> {
  return post<OfferCodeResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/offer_codes`,
    queryParams: { access_token: accessToken },
    data: { name, amount_off, offer_type, max_purchase_count, universal },
  });
}

export async function updateOfferCode({
  accessToken,
  productId,
  offerCodeId,
  max_purchase_count,
}: {
  accessToken: string;
  productId: string;
  offerCodeId: string;
  max_purchase_count: number;
}): Promise<ApiResponse<OfferCodeResponse>> {
  return put<OfferCodeResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/offer_codes/${offerCodeId}`,
    queryParams: { access_token: accessToken },
    data: { max_purchase_count },
  });
}

export async function deleteOfferCode({
  accessToken,
  productId,
  offerCodeId,
}: {
  accessToken: string;
  productId: string;
  offerCodeId: string;
}): Promise<ApiResponse<DeleteOfferCodeResponse>> {
  return remove<DeleteOfferCodeResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/offer_codes/${offerCodeId}`,
    queryParams: { access_token: accessToken },
  });
}
