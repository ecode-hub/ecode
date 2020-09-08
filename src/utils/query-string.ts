export const parseQueryString = <T = { [props: string]: string }>(query): T => {
  //取得查询字符串并去掉开头的问号
  const args = {};
  try {
    let qs = (query.length > 0 ? query.substring(1) : '');
    const items = qs.length ? qs.split('&') : [];
    for (let i = 0; i < items.length; i++) {
      let item = items[i].split('=');
      let name = decodeURIComponent(item[0]);
      let value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
  } catch (e) {
    console.error('parseQueryString fail');
  }
  return (args as T);
};

export const genQueryString = <T = { [props: string]: string }>(params: T): string => {
  try {
    const paramsObj = Object.entries(params);
    if (paramsObj.length === 0) return '';
    return paramsObj.reduce((res, param) => res + `${encodeURIComponent(param[0])}=${encodeURIComponent(param[1])}&`, '?').slice(0, -1);
  } catch (e) {
    console.error('genQueryString error');
    return '';
  }
};