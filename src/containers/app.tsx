import React from 'react';
import Routers from './routers';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import '@styles/global.scss';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div id='app'>
        <Routers />
      </div>
    </ConfigProvider>
  );
}

export default App;