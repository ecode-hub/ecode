import { $http } from '@utils';
import { forEach } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function obj2FormData(data: any) {
  if (data instanceof FormData) {
    return data;
  }
  const fd = new FormData();
  forEach(data, (val, key) => {
    fd.append(key, val);
  });
  return fd;
}

function ping() {
  return $http.get('/ping');
}

function login(form) {
  return $http.post('/users/login',{
    name: 'jiaojiao',
    password: '123qwe'
  });
}

export {
  ping,
  login
};
