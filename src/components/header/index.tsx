import React from 'react';
import { Button, Dropdown } from 'antd';
import {
  BellFilled
} from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from '@constants';
// import { ConfigProvider } from '@config';
import { $storage } from '@utils';

import logo from '@assets/icons/logo.png';

import { Avatar } from '@components/avatar';
import './index.scss';
import S from './index.module.scss';

console.log(S);


interface IProps {

}

function Header(props: RouteComponentProps<IProps>) {

  // Demo: 通过 provider 注入配置
  // const config = useContext(ConfigProvider);
  // console.log(config);

  const goTo = (path: string) => {
    props.history.push(path);
  };

  return (
    <header id='ecode-header'>
      <div className='container'>
        <div className='header-logo' onClick={() => goTo(ROUTES.Home)}>
          <img className='logo' src={logo}></img>
        </div>
        <nav className='main-nav'>
          <ul className='ul-format nav-list'>
            <li className='nav-browse' onClick={() => goTo(ROUTES.Browse)}>
              <div className={S.sub}>浏览</div>
              
            </li>
            {/* <li className='nav-statistic' onClick={() => goTo(ROUTES.Statistic)}>
              统计
            </li> */}
            <li className='nav-empty'></li>
            <li className='nav-card'>
              <Button type='primary' onClick={() => goTo(ROUTES.Practice)}>
                学习
              </Button>
            </li>
            <li className='nav-notification'>
              <BellFilled onClick={() => goTo(ROUTES.Notification)} />
            </li>
          </ul>
        </nav>
        {
          $storage.userData ? (
            <Avatar/>
          ) : (
            <div className='header-auth'>
              <div className='header-login' onClick={() => goTo(ROUTES.Login)}>登录</div>
              <div className='header-register' onClick={() => goTo(ROUTES.Register)}>注册</div>
            </div>
          ) 
        }
      </div>
    </header>
  );
}

const HeaderWrapper = withRouter(Header);

export {
  HeaderWrapper as Header
};