import axios, { AxiosResponse, AxiosError, AxiosRequestConfig }from 'axios';
import { SERVER_URL } from '@environments';
import { $storage } from './storage';
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

// 带额外带头的 http
const $http = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000 * 10,
});

$http.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = $storage.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  if (config.params?.keep !== 'yes') {
    config.transformRequest = obj2FormData;
  }
  return config;
});

$http.interceptors.response.use(handleSuccess, handleError);

function handleSuccess(response: AxiosResponse) {
  return response.data;
}

function handleError(error: AxiosError) {
  return Promise.reject(error);
}

export {
  $http
};