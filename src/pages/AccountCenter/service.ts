import request from 'umi-request';

export async function queryCurrent(name:string) {
  return request('/api/user/',
    {
      method: 'GET',
      params: { name: name },
      headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk5NzU5ODksImlhdCI6MTU4OTM3MTE4OSwiaWQiOjEyLCJpc3MiOiJpY2Vmb3JnIiwibmJmIjoxNTg5MzcxMTg5LCJ1c2VybmFtZSI6Imh3cyJ9.B8Muwf3moO1Xouj7a0VYwDipMQqE3cEPwn-3-wT1NbM'}
    });
}

export async function queryFakeList(params: { count: number }) {
  return request('/api/fake_list', {
    params,
  });
}
