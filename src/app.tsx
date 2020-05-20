import React from 'react';
import Routers from './containers/routers';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProvider,config } from '@config';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import '@styles/global.scss';

function App() {
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