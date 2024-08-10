import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, put, remove, ApiResponse } from '../api';

export type PurchasingPowerParityPrices = {
  [countryCode: string]: number;
};

export type RecurrencePrice = {
  price_cents: number;
  suggested_price_cents: number | null;
  purchasing_power_parity_prices: PurchasingPowerParityPrices;
};

export type ProductVariantOption = {
  name: string;
  price_difference: number;
  purchasing_power_parity_prices: PurchasingPowerParityPrices;
  is_pay_what_you_want: boolean;
  recurrence_prices: {
    [recurrence: string]: RecurrencePrice;
  } | null;
};

export type ProductVariant = {
  title: string;
  options: ProductVariantOption[];
};

export type Product = {
  custom_permalink: string | null;
  custom_receipt: string | null;
  custom_summary: string;
  custom_fields: any[];
  customizable_price: any;
  description: string;
  deleted: boolean;
  max_purchase_count: number | null;
  name: string;
  preview_url: string | null;
  require_shipping: boolean;
  subscription_duration: string | null;
  published: boolean;
  url: string;
  id: string;
  price: number;
  purchasing_power_parity_prices: PurchasingPowerParityPrices;
  currency: string;
  short_url: string;
  thumbnail_url: string;
  tags: string[];
  formatted_price: string;
  file_info: any;
  sales_count: string;
  sales_usd_cents: string;
  is_tiered_membership: boolean;
  recurrences: string[] | null;
  variants: ProductVariant[];
};

export type ProductsResponse = {
  success: boolean;
  products: Product[];
};

export type ProductResponse = {
  success: boolean;
  product: Product;
};

export type DeleteProductResponse = {
  success: boolean;
  message: string;
};

export interface GetProductsParams {
  accessToken: string;
}

export async function getProducts({
  accessToken,
}: GetProductsParams): Promise<ApiResponse<ProductsResponse>> {
  return get<ProductsResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products`,
    queryParams: { access_token: accessToken },
  });
}

export interface GetProductParams {
  accessToken: string;
  productId: string;
}

export async function getProduct({
  accessToken,
  productId,
}: GetProductParams): Promise<ApiResponse<ProductResponse>> {
  return get<ProductResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}`,
    queryParams: { access_token: accessToken },
  });
}

export interface DeleteProductParams {
  accessToken: string;
  productId: string;
}

export async function deleteProduct({
  accessToken,
  productId,
}: DeleteProductParams): Promise<ApiResponse<DeleteProductResponse>> {
  return remove<DeleteProductResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}`,
    queryParams: { access_token: accessToken },
  });
}

export interface EnableProductParams {
  accessToken: string;
  productId: string;
}

export async function enableProduct({
  accessToken,
  productId,
}: EnableProductParams): Promise<ApiResponse<ProductResponse>> {
  return put<ProductResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/enable`,
    queryParams: { access_token: accessToken },
  });
}

export interface DisableProductParams {
  accessToken: string;
  productId: string;
}

export async function disableProduct({
  accessToken,
  productId,
}: DisableProductParams): Promise<ApiResponse<ProductResponse>> {
  return put<ProductResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/disable`,
    queryParams: { access_token: accessToken },
  });
}
