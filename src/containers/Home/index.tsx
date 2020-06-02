import React, { useEffect, useState } from 'react';
import {
  Header,
  HeaderWraper
} from '@components';
import { getUsers, getUser } from '@services';
import { IfElse } from '@components';
import { $storage } from '@utils';
import { useRouterParams } from '@hooks';
import { message, Alert, Modal } from 'antd';
import { ResendEmail } from './components/resend-email';
const { warn } = Modal;

import './index.scss';


function Home() {
  const param = useRouterParams();
  const [userStatus , setUserstatus] = useState($storage.userData.status);
  useEffect(()=>{
    if(param.emailConfirmUser === 'success'){
      getUser().then(res=>{
        $storage.userData = res.data;
        setUserstatus($storage.userData.status);
      });
    }else if(param.emailConfirmUser === 'fail'){
      warn({
        title: '邮箱验证失败',
        content: ResendEmail(),
        okText: '关闭'
      });
    }
  },[param]);

  // useEffect(()=>{
  //   getUsers().then(res=>{      
  //     message.success('数据请求成功');
  //     console.log(res);
  //   });
  // },[]);

  return (
    <HeaderWraper>
      <Header />
      <IfElse if={userStatus === 0}>
        <Alert
          message="您还没有完成你的账号验证"
          description="部分功能受限，请完成您的电子邮箱验证"
          type="warning"
          closable
        />
      </IfElse>
      
      <div>Hello ECode!</div>
    </HeaderWraper>
  );
}

export default Home;