import { $http } from '@utils';
import { IApiLogin } from '@models';
import { pick } from 'lodash';

function ping() {
  return $http.get('/ping');
}



function login(form) : Promise<IApiLogin> {
  const data = pick(form,['name','password']);
  return $http.post('/users/login',data);
}

export {
  ping,
  login
};
