import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get, post, put, remove } from '../api';

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
}): Promise<CustomFieldsResponse> {
  const response = await get<CustomFieldsResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields`,
    queryParams: { access_token: accessToken },
  });
  return response.data;
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
}): Promise<CustomFieldResponse> {
  const response = await post<CustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields`,
    queryParams: { access_token: accessToken },
    data: { name, required: required, variant },
  });
  return response.data;
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
}): Promise<CustomFieldResponse> {
  const response = await put<CustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields/${encodeURIComponent(
      name
    )}`,
    queryParams: { access_token: accessToken },
    data: { required: required, name, variant },
  });
  return response.data;
}

export async function deleteCustomField({
  accessToken,
  productId,
  name,
}: {
  accessToken: string;
  productId: string;
  name: string;
}): Promise<DeleteCustomFieldResponse> {
  const response = await remove<DeleteCustomFieldResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/products/${productId}/custom_fields/${encodeURIComponent(
      name
    )}`,
    queryParams: { access_token: accessToken },
  });
  return response.data;
}
