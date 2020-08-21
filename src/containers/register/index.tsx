import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { ROUTES } from '@constants';
import { register, login } from '@services';
import { $storage } from '@utils';
import logo from '@assets/icons/logo.png';
import './index.scss';

const RegisterForm = () => {
  const history = useHistory();
  const onFinish = data => {
    if(data.password.length < 6 ){
      message.warn('密码至少6位字符');
      return;
    }
    if(data.password !== data.passwordConfirm ){
      message.warn('两次密码不一致');
      return;
    }
    register(data).then(res=>{
      login(data).then(res=>{
        history.push(ROUTES.Home);
      }).catch(err=>{
        message.warn(err.message);
      });
    }).catch(err=>{
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
        <Input placeholder='用户名' autoComplete='new-password'/>
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
        <Input.Password placeholder='密码' autoComplete='new-password'/>
      </Form.Item>
      <Form.Item
        name='passwordConfirm'
        rules={[
          {
            required: true,
            message: '必填'
          }
        ]}
      >
        <Input.Password placeholder='确认密码'/>
      </Form.Item>
      <Form.Item
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
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};


const Register = () => {
  const history = useHistory();
  const onLogin = () => {
    history.push(ROUTES.Login);
  };
  return (
    <div className='register bg-gray full'>
      <div className='register-container bg-write'>
        <img className='logo' src={logo}></img>
        <RegisterForm/>
        <footer>
          已经有账号？<span onClick={onLogin}>登录</span>
        </footer>
      </div>
    </div>
  );
};

export default Register;