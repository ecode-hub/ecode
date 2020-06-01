import React, { useEffect, useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Button } from 'antd';
import './index.scss';

function Success() {
  const history = useHistory();
  const goToLogin = () => {
    history.push(ROUTES.Login);
  };
  const [time , setTime] = useState(5);
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(time=>time-1);
    },1000);
    return ()=>{
      clearInterval(timer);
    };
  },[setTime]);

  useEffect(()=>{
    if(time<=0){
      goToLogin();
    }
  },[time]);

  return (
    <div className="success">
      <div className="container">
        <h3>密码重置成功</h3>
        <div className="hr"></div>
        <div className="icon">
          <CheckCircleFilled/>
        </div>
        <div className="message">
          <span>{time}s</span>&nbsp;后自动跳转到登录页
        </div>
        <Button type="primary" block onClick={goToLogin}>
          立即前往
        </Button>
      </div>
    </div>
  );
}

export default Success;