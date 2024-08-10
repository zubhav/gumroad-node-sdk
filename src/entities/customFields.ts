import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, post, put, remove, ApiResponse } from '../api';

export type CustomField = {
  name: string;
  required: string;
};

export type CustomFieldsResponse = {
  success: boolean;
  custom_fields: CustomField[];
};

export type CustomFieldResponse = {
  success: boolean;
  custom_field: CustomField;
};

export type DeleteCustomFieldResponse = {
  success: boolean;
  message: string;
};

export async function getCustomFields({
  accessToken,
  productId,
}: {
  accessToken: string;
  productId: string;
}): Promise<ApiResponse<CustomFieldsResponse>> {
  return get<CustomFieldsResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields`,
    queryParams: { access_token: accessToken },
  });
}

export async function createCustomField({
  accessToken,
  productId,
  name,
  required,
  variant,
}: {
  accessToken: string;
  productId: string;
  name: string;
  required: boolean;
  variant?: string;
}): Promise<ApiResponse<CustomFieldResponse>> {
  return post<CustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields`,
    queryParams: { access_token: accessToken },
    data: { name, required: required.toString(), variant },
  });
}

export async function updateCustomField({
  accessToken,
  productId,
  name,
  required,
  variant,
}: {
  accessToken: string;
  productId: string;
  name: string;
  required?: boolean;
  variant?: string;
}): Promise<ApiResponse<CustomFieldResponse>> {
  return put<CustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields/${encodeURIComponent(
      name
    )}`,
    queryParams: { access_token: accessToken },
    data: { required: required?.toString(), name, variant },
  });
}

export async function deleteCustomField({
  accessToken,
  productId,
  name,
}: {
  accessToken: string;
  productId: string;
  name: string;
}): Promise<ApiResponse<DeleteCustomFieldResponse>> {
  return remove<DeleteCustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields/${encodeURIComponent(
      name
    )}`,
    queryParams: { access_token: accessToken },
  });
}
