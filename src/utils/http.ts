import axios, { AxiosResponse, AxiosError, AxiosRequestConfig }from 'axios';
import { SERVER_URL } from '@environments';
import { $storage } from './storage';
import { forEach,get } from 'lodash';
import { updateToken, updateTokenURL } from '@services';

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

// 带额外带头的 http
const $http = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000 * 10,
});


let isUpdateingToken = false;

$http.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token, tokenTime }  = $storage;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  // 更新 token，每隔一天更新一次 token
  if(
    token &&
    Date.now() - tokenTime > 1000 * 60 * 60 * 24 && 
    config.url !== updateTokenURL &&
    !isUpdateingToken
  ){
    isUpdateingToken = true;
    setTimeout(()=>{
      updateToken(token).then((res)=>{
        $storage.token = res.token || '';
        $storage.tokenTime = Date.now();
        $storage.tokenTime = Date.now();
      }).finally(()=>{
        isUpdateingToken = false;
      });
    },1000);
  }
  if (config.params?.keep !== 'yes') {
    config.transformRequest = obj2FormData;
  }
  return config;
});

$http.interceptors.response.use(handleSuccess, handleError);

function handleSuccess(response: AxiosResponse) {
  return response.data || {};
}

function handleError(error: AxiosError) {
  const data = error.response?.data || {};
  return Promise.reject(data);
}

export {
  $http
};