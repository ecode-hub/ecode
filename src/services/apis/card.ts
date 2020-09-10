import { $http, getUserId } from '@utils';
import { ICard, IAPICommon } from '@models';
import { pick } from 'lodash';

// 所有公共卡片
export function getPublicCards(): Promise<ICard[]> {
  return $http.get('/cards/');
}

// 根据 ID 获取公共卡片
export function getPublicCard(cardId: number): Promise<ICard> {
  return $http.get(`/cards/${cardId}`);
}

export function postCard(form): Promise<IAPICommon> {
  const data = pick(form, ['question', 'answer']);
  return $http.post(`/users/${getUserId()}/cards/`, data);
}

export function putCard(form): Promise<IAPICommon> {
  const data = pick(form, ['question', 'answer']);
  return $http.put(`/users/${getUserId()}/cards/`, data);
}

export function getCards(): Promise<ICard[]> {
  return $http.get(`/users/${getUserId()}/cards/`);
}

export function getCard(cardId: number): Promise<ICard[]> {
  return $http.get(`/users/${getUserId()}/cards/${cardId}`);
}
