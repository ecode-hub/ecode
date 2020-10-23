import React, { useEffect, useState } from 'react';
import Routers from './containers/routers';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProvider, config } from '@config';
import { ping } from '@services';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import '@styles/global.scss';

function App() {
  useEffect(() => {
    ping()
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.warn('无法连接服务器', err);
      });
  });
  return (
    <AntdConfigProvider locale={zhCN}>
      <ConfigProvider.Provider value={config}>
        <div id='app'>
          <Routers />
        </div>
      </ConfigProvider.Provider>
    </AntdConfigProvider>
  );
}

export default App;