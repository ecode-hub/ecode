import React, { useEffect } from 'react';
import {
  Header,
  HeaderWraper
} from '@components';
import { getUsers } from '@services';

import './index.scss';
import { message } from 'antd';

function Home() {
  useEffect(()=>{
    getUsers().then(res=>{
      message.success('数据请求成功');
      console.log(res);
    });
  },[]);
  return (
    <HeaderWraper>
      <Header />
      <div>Hello ECode!</div>
    </HeaderWraper>
  );
}

export default Home;