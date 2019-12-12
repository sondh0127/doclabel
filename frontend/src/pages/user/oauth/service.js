import request from '@/utils/request';

export async function githubOAuth({ code }) {
  return request('/api/github/', {
    method: 'POST',
    data: {
      code,
    },
  });
}

// export async function googleOAuth({ clientId, clientSecret, code }) {
//   return request('/api/github/', {
//     method: 'POST',
//     params: {
//       client_id: clientId,
//       client_secret: clientSecret,
//       code,
//     },
//   });
// }

// export async function facebookOAuth({ clientId, clientSecret, code }) {
//   return request('/api/github/', {
//     method: 'POST',
//     params: {
//       client_id: clientId,
//       client_secret: clientSecret,
//       code,
//     },
//   });
// }
