import { $storage } from './storage';

export * from './http';
export * from './storage';
export * from './safe-parse';
export * from './super-memo2';
export * from './query-string';

export function getUserId(): number {
  let id = 0;
  try {
    id = $storage.userData.id;
  } catch (e) {
    console.warn('getUserId error');
  }
  return id;
}
