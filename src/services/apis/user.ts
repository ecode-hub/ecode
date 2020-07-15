import { $http, getUserId } from '@utils';
import {  IAPIGetUser } from '@models';

export function getUsers() {
  return $http.get('/users/');
}

export function getUser():Promise<IAPIGetUser> {
  return $http.get(`/users/${getUserId()}`);
}
