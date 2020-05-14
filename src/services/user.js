import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/user/current',    {
    headers: { 'Authorization': window.localStorage.getItem("token")}
  });
}
export async function queryNotices() {
  return request('/api/notices');
}
