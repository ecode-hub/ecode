import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { ROUTES } from '@constants';
import logo from '@assets/icons/logo.png';
import './index.scss';

const RegisterForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '必填',
          },
        ]}
      >
        <Input placeholder='用户名'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '必填',
          },
        ]}
      >
        <Input.Password placeholder='密码'/>
      </Form.Item>

      <Form.Item
        name="passwordConfirm"
        rules={[
          {
            required: true,
            message: '必填',
          },
        ]}
      >
        <Input.Password placeholder='确认密码'/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: '必填',
          },
        ]}
      >
        <Input placeholder='邮箱'/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" block>
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
    <div className="register bg-gray full">
      <div className="register-container bg-write">
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