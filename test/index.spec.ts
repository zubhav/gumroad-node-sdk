import GumroadApiClient from '../src';

describe('GumroadApiClient', () => {
  it('should create a GumroadApiClient instance', () => {
    const accessToken = 'myAccessToken';
    const apiClient = new GumroadApiClient(accessToken);
    expect(apiClient).toHaveProperty('accessToken', accessToken);
  });
});
