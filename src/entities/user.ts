import { GUMROAD_API_V2_BASE_URL } from '../constants';
import { get } from '../api';

export type User = {
  bio: string;
  name: string;
  twitter_handle: string | null;
  user_id: string;
  email?: string;
  url?: string;
};

export type UserResponse = {
  success: boolean;
  user: User;
};

export async function getUser({
  accessToken,
}: {
  accessToken: string;
}): Promise<UserResponse> {
  const response = await get<UserResponse>({
    url: `${GUMROAD_API_V2_BASE_URL}/user`,
    queryParams: { access_token: accessToken },
  });
  return response.data;
}
