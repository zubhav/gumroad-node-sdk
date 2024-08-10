import { URLSearchParams } from 'url';

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface CommonApiParams {
  url: string;
  queryParams?: Record<string, any>;
}

interface ApiParams extends CommonApiParams {
  data?: Record<string, any>;
}

export async function get<ResponseSchema>({
  url,
  queryParams,
}: CommonApiParams): Promise<ApiResponse<ResponseSchema>> {
  const queryString = new URLSearchParams(queryParams || {}).toString();
  const fullUrl = url + (queryString ? `?${queryString}` : '');
  const response = await fetch(fullUrl);

  const data = (await response.json()) as ResponseSchema;
  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
}

export async function post<ResponseSchema>({
  url,
  data,
  queryParams,
}: ApiParams): Promise<ApiResponse<ResponseSchema>> {
  const queryString = new URLSearchParams(queryParams || {}).toString();
  const fullUrl = url + (queryString ? `?${queryString}` : '');
  const response = await fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = (await response.json()) as ResponseSchema;

  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
  };
}

export async function put<ResponseSchema>({
  url,
  data,
  queryParams,
}: ApiParams): Promise<ApiResponse<ResponseSchema>> {
  const queryString = new URLSearchParams(queryParams || {}).toString();
  const fullUrl = url + (queryString ? `?${queryString}` : '');
  const response = await fetch(fullUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = (await response.json()) as ResponseSchema;

  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
  };
}

export async function patch<ResponseSchema>({
  url,
  data,
  queryParams,
}: ApiParams): Promise<ApiResponse<ResponseSchema>> {
  const queryString = new URLSearchParams(queryParams || {}).toString();
  const fullUrl = url + (queryString ? `?${queryString}` : '');
  const response = await fetch(fullUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = (await response.json()) as ResponseSchema;

  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
  };
}

export async function remove<ResponseSchema>({
  url,
  queryParams,
}: ApiParams): Promise<ApiResponse<ResponseSchema>> {
  const queryString = new URLSearchParams(queryParams || {}).toString();
  const fullUrl = url + (queryString ? `?${queryString}` : '');
  const response = await fetch(fullUrl, {
    method: 'DELETE',
  });
  const responseData = (await response.json()) as ResponseSchema;

  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
  };
}
