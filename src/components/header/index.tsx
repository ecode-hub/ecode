import React, { useCallback, useMemo } from 'react';
import { Button, Dropdown, Menu, Modal } from 'antd';
import {
  BellFilled,
  EditFilled,
  PlusSquareFilled,
  HomeFilled,
  LikeFilled,
  TagsFilled,
  SettingFilled,
  InfoCircleFilled,
  LogoutOutlined
} from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from '@constants';

import logo from '@assets/icons/logo.png';
import avatarGirl from '@assets/images/avatar-girl.png';
import avatarBoy from '@assets/images/avatar-boy.png';
import './index.scss';

interface IProps {

}

function Header(props: RouteComponentProps<IProps>) {

  const goTo = (path: string) => {
    props.history.push(path);
  };

  const onLogOut = () => {
    setTimeout(() => {
      Modal.confirm({
        title: '确定退出 ECode ？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          // TODO: 退出操作
          console.log('退出成功');
          goTo(ROUTES.Login);
        }
      });
    }, 200);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => goTo(ROUTES.Edit)}>
        <EditFilled />新建问答卡
      </Menu.Item>
      <Menu.Item key="1" onClick={() => {
        console.log('新建分类');
      }}>
        <PlusSquareFilled /> 新建分类
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={() => goTo(ROUTES.User)}>
        <HomeFilled />我的主页
      </Menu.Item>
      <Menu.Item key="3" onClick={() => goTo(ROUTES.User)}>
        <LikeFilled />我赞过的
      </Menu.Item>
      <Menu.Item key="4" onClick={() => goTo(ROUTES.Subscribed)}>
        <TagsFilled />
        标签管理
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="5" onClick={() => goTo(ROUTES.Setting)}>
        <SettingFilled />
        设置
      </Menu.Item>
      <Menu.Item key="6" onClick={() => goTo(ROUTES.About)}>
        <InfoCircleFilled />
        关于
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="7" onClick={onLogOut}>
        <LogoutOutlined />
        登出
      </Menu.Item>
    </Menu>
  );

  return (
    <header id='ecode-header'>
      <div className='container'>
        <div className='header-logo' onClick={() => goTo(ROUTES.Home)}>
          <img className='logo' src={logo}></img>
        </div>
        <nav className='main-nav'>
          <ul className='ul-format nav-list'>
            <li className='nav-browse' onClick={() => goTo(ROUTES.Browse)}>
              浏览
            </li>
            {/* <li className='nav-statistic' onClick={() => goTo(ROUTES.Statistic)}>
              统计
            </li> */}
            <li className='nav-empty'></li>
            <li className='nav-card'>
              <Button type='primary' onClick={() => goTo(ROUTES.Card)}>
                学习
              </Button>
            </li>
            <li className='nav-notification'>
              <BellFilled onClick={() => goTo(ROUTES.Notification)} />
            </li>
          </ul>
        </nav>
        <div className='header-avatar'>
          <Dropdown
            trigger={['click']}
            overlayClassName='header-avatar-menu'
            overlay={menu}
            placement='bottomRight'>
            <img className='avatar' src={avatarBoy}></img>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

const HeaderWrapper = withRouter(Header);

export {
  HeaderWrapper as Header
};