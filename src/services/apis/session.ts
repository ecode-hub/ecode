import { $http, $storage } from '@utils';
import {
  IAPILogin,
  IAPIRegister,
  IAPIToken,
  IAPICommon
} from '@models';
import { pick } from 'lodash';

const updateTokenURL = '/token';

function ping() {
  return $http.get('/ping');
}

function updateToken(token: string): Promise<IAPIToken> {
  return $http.post(updateTokenURL, { token });
}

function login(form): Promise<IAPILogin> {
  const data = pick(form, ['name', 'password']);
  return $http
    .post<unknown, IAPILogin>('/login', data)
    .then(res => {
      // 保存登录信息到本地
      $storage.token = res.token;
      $storage.tokenTime = Date.now();
      $storage.userData = res.data;
      return res;
    });
}

function register(form): Promise<IAPIRegister> {
  const data = pick(form, ['name', 'password', 'email']);
  return $http.post('/register', data);
}

// 发送重置密码邮件
function sendResetPasswordEmail(email: string): Promise<IAPICommon> {
  return $http.post(`email/send-reset-password/${email}`);
}

// 发送激活邮件
function sendConfirmEmail(userid: number): Promise<IAPICommon> {
  return $http.post(`email/send-confirm/${userid}`);
}

function resetPassword(form): Promise<IAPICommon> {
  const data = pick(form, ['id', 'uuid', 'password']);
  return $http.post('/reset-password', data);
}


export {
  updateTokenURL,
  updateToken,
  ping,
  login,
  register,
  sendResetPasswordEmail,
  sendConfirmEmail,
  resetPassword
};
