import request from 'umi-request';

export async function queryCurrent(token:string) {
  return request('/api/user/current',
    {
      method: 'GET',
      headers: { 'Authorization': token}
    });
}

export async function queryFakeList(params: { count: number }) {
  return request('/api/fake_list', {
    params,
  });
}
