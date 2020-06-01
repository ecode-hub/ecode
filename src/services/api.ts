import { $http } from '@utils';
import { IAPILogin,IAPIRegister, IAPIToken,IAPICommon } from '@models';
import { pick } from 'lodash';

const updateTokenURL = '/users/token';

function ping() {
  return $http.get('/ping');
}

function updateToken(token: string): Promise<IAPIToken>  {
  return $http.post(updateTokenURL,{ token });
}

function login(form) : Promise<IAPILogin> {
  const data = pick(form,['name','password']);
  return $http.post('/users/login',data);
}

function register(form) : Promise<IAPIRegister> {
  const data = pick(form,['name','password','email']);
  return $http.post('/users/register',data);
}

function getUsers() {
  return $http.get('/users/');
}

function sendResetPasswordEmail(email: string): Promise<IAPICommon>{
  return $http.post(`email/send-reset-password/${email}`);
}

function resetPassword(form) : Promise<IAPICommon> {
  const data = pick(form,['id','uuid','password']);
  return $http.post('/reset-password', data);
}

export {
  updateTokenURL,
  updateToken,
  ping,
  login,
  register,
  getUsers,
  sendResetPasswordEmail,
  resetPassword
};
