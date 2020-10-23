import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Form, Input, Button, message } from 'antd';
import { login } from '@services';
import logo from '@assets/icons/logo.png';
import './index.scss';

const LoginForm = () => {
  const history = useHistory();
  const onFinish = data => {
    login(data).then(res => {
      history.push(ROUTES.Home);
    }).catch(err => {
      message.warn(err.message);
    });
  };

  return (
    <Form
      className='bg-write'
      onFinish={onFinish}
    >
      <Form.Item
        name='name'
        rules={[
          {
            required: true,
            message: '必填'
          }
        ]}
      >
        <Input placeholder='用户名' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: '必填'
          }
        ]}
      >
        <Input.Password placeholder='密码' />
      </Form.Item>
      <Form.Item >
        <Button type='primary' htmlType='submit' block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

const Login = () => {
  const history = useHistory();
  const onForgetPassword = () => {
    history.push(ROUTES.ResetPassword.SendEmail);
  };
  const onRegister = () => {
    history.push(ROUTES.Register);
  };
  return (
    <div className='login bg-gray full'>
      <div className='login-container bg-write'>
        <img className='logo' src={logo}></img>
        <LoginForm />
        <footer>
          <span onClick={onForgetPassword}>忘记密码</span>
          <span onClick={onRegister}>注册</span>
        </footer>
      </div>
    </div>
  );
};

export default Login;