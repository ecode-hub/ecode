function safeParse(str: string, defultRes = {}) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.group('JSON 解析出错');
    console.warn(str || '_空_');
    console.warn(e);
    console.groupEnd();
    return defultRes;
  }
}

export {
  safeParse
};
