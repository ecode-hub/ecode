import React, { useEffect, useState } from 'react';
import {
  Header,
  HeaderWraper,
  IfElse
} from '@components';
import { getPublicCards, getPublicCard, getUser } from '@services';
import { $storage } from '@utils';
import { useRouterParams } from '@hooks';
import { message, Alert, Modal } from 'antd';
import { ResendEmail } from './components/resend-email';
const { warn } = Modal;

import './index.scss';
import S from './index.module.scss';

// scss 模块化功能实现
console.log(S);

function Home() {
  const param = useRouterParams();
  const [userStatus, setUserstatus] = useState($storage.userData?.status || 0);
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
  }, [param]);

  useEffect(()=>{
    // getCards().then(res=>{      
    //   message.success('数据请求成功');
    //   console.log(res);
    // });
    // getCard(22).then(res=>{      
    //   message.success('数据请求成功');
    //   console.log(res);
    // });
  }, []);

  const _emailValidate = (
    <IfElse if={$storage.userData && userStatus === 0}>
      <Alert
        message='您还没有完成你的账号验证'
        description='部分功能受限，请完成您的电子邮箱验证'
        type='warning'
        closable
      />
    </IfElse>
  );

  return (
    <HeaderWraper>
      <Header />
      {_emailValidate}
      <div className={S.test}>Hello ECode!</div>
    </HeaderWraper>
  );
}

export default Home;