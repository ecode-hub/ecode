import React from 'react';
import { Input, Form, Button, message } from 'antd';
import { resetPassword } from '@services';
import { ROUTES } from '@constants';
import { useHistory } from 'react-router-dom';
import { parseQueryString } from '@utils';
import './index.scss';

function NewPwd() {
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
    const param = parseQueryString(history.location.search);
    resetPassword({ ...data,...param }).then(res=>{
      history.push(ROUTES.ResetPassword.Success);
    }).catch(err=>{
      message.warn(err.message);
    });
  };

  return (
    <div className="new-pwd">
      <div className="container">
        <h3>重置密码</h3>
        <div className='hr'></div>
        <Form
          className="bg-write form"
          style={{ paddingTop: '16px' }}
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '必填',
              },
            ]}
          >
            <Input.Password placeholder='设置密码'/>
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
          <Form.Item >
            <Button type="primary" htmlType="submit" block>
              下一步
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewPwd;