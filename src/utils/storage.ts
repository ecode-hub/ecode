import { IUser } from '@models';

function formatKey(key: string) {
  const preKey = 'ECODE:';
  return `${preKey}${key.toUpperCase()}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getData<T>(key: string, def: any = null): T {
  const str = localStorage.getItem(formatKey(key)) || '';
  try {
    const result = JSON.parse(str);
    return result === null ? def : result;
  } catch (e) {
    return def as T;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setData(key: string, data: any) {
  localStorage.setItem(formatKey(key), JSON.stringify(data));
}

const $storage = {
  set token(val:string) {
    setData('token', val);
  },
  get token() {
    return getData<string>('token');
  },
  set userData(val:IUser) {
    setData('userData', val);
  },
  get userData() {
    return getData<IUser>('userData');
  },
  set tokenTime(val:number) {
    setData('tokenTime', val);
  },
  get tokenTime() {
    return getData<number>('tokenTime');
  },
};

export {
  formatKey,
  getData,
  setData,
  $storage
};

