import React from 'react';
import { Input, Form, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@constants';
import { sendResetPasswordEmail } from '@services';
import './index.scss';

function SendEmail() {
  const history = useHistory();
  const onFinish = data => {
    const email = data.email;
    sendResetPasswordEmail(email).then(res=>{
      history.push(`${ROUTES.ResetPassword.EnterAccount}?email=${email}`);
    }).catch(err=>{
      message.warn(err.message);
    });
  };

  return (
    <div className='send-email'>
      <div className='container'>
        <h3>重置密码</h3>
        <div className='hr'></div>
        <Form
          className='bg-write form'
          layout='vertical'
          hideRequiredMark={true}
          onFinish={onFinish}
        >
          <Form.Item
            label='请输入要重置密码的邮箱账号'
            name='email'
            rules={[
              {
                required: true,
                message: '必填'
              }
            ]}
          >
            <Input placeholder='邮箱'/>
          </Form.Item>
          <Form.Item >
            <Button type='primary' htmlType='submit' block>
              下一步
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SendEmail;