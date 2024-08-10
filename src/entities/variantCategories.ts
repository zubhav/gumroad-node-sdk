import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, post, put, remove, ApiResponse } from '../api';

export type VariantCategory = {
  id: string;
  title: string;
};

export type Variant = {
  id: string;
  max_purchase_count: number | null;
  name: string;
  price_difference_cents: number;
};

export type VariantCategoryResponse = {
  success: boolean;
  variant_category: VariantCategory;
};

export type VariantCategoriesResponse = {
  success: boolean;
  variant_categories: VariantCategory[];
};

export type VariantResponse = {
  success: boolean;
  variant: Variant;
};

export type VariantsResponse = {
  success: boolean;
  variants: Variant[];
};

export type DeleteResponse = {
  success: boolean;
  message: string;
};

export async function createVariantCategory({
  accessToken,
  productId,
  title,
}: {
  accessToken: string;
  productId: string;
  title: string;
}): Promise<ApiResponse<VariantCategoryResponse>> {
  return post<VariantCategoryResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories`,
    queryParams: { access_token: accessToken },
    data: { title },
  });
}

export async function getVariantCategory({
  accessToken,
  productId,
  variantCategoryId,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
}): Promise<ApiResponse<VariantCategoryResponse>> {
  return get<VariantCategoryResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}`,
    queryParams: { access_token: accessToken },
  });
}

export async function updateVariantCategory({
  accessToken,
  productId,
  variantCategoryId,
  title,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
  title: string;
}): Promise<ApiResponse<VariantCategoryResponse>> {
  return put<VariantCategoryResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}`,
    queryParams: { access_token: accessToken },
    data: { title },
  });
}

export async function deleteVariantCategory({
  accessToken,
  productId,
  variantCategoryId,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
}): Promise<ApiResponse<DeleteResponse>> {
  return remove<DeleteResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}`,
    queryParams: { access_token: accessToken },
  });
}

export async function getVariantCategories({
  accessToken,
  productId,
}: {
  accessToken: string;
  productId: string;
}): Promise<ApiResponse<VariantCategoriesResponse>> {
  return get<VariantCategoriesResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories`,
    queryParams: { access_token: accessToken },
  });
}

export async function createVariant({
  accessToken,
  productId,
  variantCategoryId,
  name,
  price_difference_cents,
  max_purchase_count,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
  name: string;
  price_difference_cents: number;
  max_purchase_count?: number;
}): Promise<ApiResponse<VariantResponse>> {
  return post<VariantResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}/variants`,
    queryParams: { access_token: accessToken },
    data: { name, price_difference_cents, max_purchase_count },
  });
}

export async function getVariant({
  accessToken,
  productId,
  variantCategoryId,
  variantId,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
  variantId: string;
}): Promise<ApiResponse<VariantResponse>> {
  return get<VariantResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}/variants/${variantId}`,
    queryParams: { access_token: accessToken },
  });
}

export async function updateVariant({
  accessToken,
  productId,
  variantCategoryId,
  variantId,
  name,
  price_difference_cents,
  max_purchase_count,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
  variantId: string;
  name?: string;
  price_difference_cents?: number;
  max_purchase_count?: number;
}): Promise<ApiResponse<VariantResponse>> {
  return put<VariantResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}/variants/${variantId}`,
    queryParams: { access_token: accessToken },
    data: { name, price_difference_cents, max_purchase_count },
  });
}

export async function deleteVariant({
  accessToken,
  productId,
  variantCategoryId,
  variantId,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
  variantId: string;
}): Promise<ApiResponse<DeleteResponse>> {
  return remove<DeleteResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}/variants/${variantId}`,
    queryParams: { access_token: accessToken },
  });
}

export async function getVariants({
  accessToken,
  productId,
  variantCategoryId,
}: {
  accessToken: string;
  productId: string;
  variantCategoryId: string;
}): Promise<ApiResponse<VariantsResponse>> {
  return get<VariantsResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/variant_categories/${variantCategoryId}/variants`,
    queryParams: { access_token: accessToken },
  });
}
