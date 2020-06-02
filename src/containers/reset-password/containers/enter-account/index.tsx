import React from 'react';
import { IfElse } from '@components';
import { useRouterParams } from '@hooks';
import { message } from 'antd';
import { sendResetPasswordEmail } from '@services';
import './index.scss';

function EnterAccount() {
  const param = useRouterParams();
  const onResend = () => { 
    sendResetPasswordEmail(param.email).then(res=>{
      message.success(res.message);
    }).catch(err=>{
      message.warn(err.message);
    });
  };

  return (
    <div className="enter-account">
      <div className="container">
        <h3>重置密码</h3>
        <div className="hr"></div>
        <div className="message">
          <IfElse if={!!param.email}>
            我们已经向您的注册邮箱 {param.email} 发送了一封密码找回邮件，请您注意接收邮件
          </IfElse>
        </div>
        <footer>
          没有收到？<span onClick={onResend}>重新发送</span>
        </footer>
      </div>
    </div>
  );
}

export default EnterAccount;