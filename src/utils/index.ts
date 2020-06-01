export * from './safe-parse';
export * from './super-memo2';
export * from './storage';
export * from './http';

const parseQueryString = (query):any => {
  //取得查询字符串并去掉开头的问号
  const args = {};
  try {
    let qs = (query.length > 0 ? query.substring(1) : '');
    const items = qs.length ? qs.split('&') : [];
    for (let i=0; i < items.length; i++){
      let item = items[i].split('=');
      let name = decodeURIComponent(item[0]);
      let value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
  }catch(e){
    console.error('parseQueryString fail');
  }
  return args;
}; 

export {
  parseQueryString
};