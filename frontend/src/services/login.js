import request from '@/utils/request';
export async function accountLogin(params) {
  return request('/api/auth', {
    method: 'POST',
    data: params,
  });
}

export async function accountLogout() {
  return request('/api/auth', {
    method: 'DELETE',
  });
}
