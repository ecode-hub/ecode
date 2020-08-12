import React from 'react';
import { Dropdown, Menu, Modal } from 'antd';
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
import { ROUTES } from '@constants';
import { $storage } from '@utils';
import avatarGirl from '@assets/images/avatar-girl.png';
import avatarBoy from '@assets/images/avatar-boy.png';

import './index.scss';

const goTo = (path: string) => {
  location.hash = path;
};

const onLogOut = () => {
  setTimeout(() => {
    Modal.confirm({
      title: '确定退出 ECode ？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        $storage.clearAll();
        console.log('退出成功');
        goTo(ROUTES.Login);
      }
    });
  }, 200);
};

const menu = (
  <Menu>
    <Menu.Item key='0' onClick={() => goTo(ROUTES.Cards.New)}>
      <EditFilled />新建问答卡
    </Menu.Item>
    <Menu.Item key='1' onClick={() => {
      console.log('新建分类');
    }}>
      <PlusSquareFilled /> 新建分类
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='2' onClick={() => goTo(ROUTES.User)}>
      <HomeFilled />我的主页
    </Menu.Item>
    <Menu.Item key='3' onClick={() => goTo(ROUTES.User)}>
      <LikeFilled />我赞过的
    </Menu.Item>
    <Menu.Item key='4' onClick={() => goTo(ROUTES.Subscribed)}>
      <TagsFilled />标签管理
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='5' onClick={() => goTo(ROUTES.Setting)}>
      <SettingFilled />设置
    </Menu.Item>
    <Menu.Item key='6' onClick={() => goTo(ROUTES.About)}>
      <InfoCircleFilled />关于
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='7' onClick={onLogOut}>
      <LogoutOutlined />登出
    </Menu.Item>
  </Menu>
);

function Avatar() {
  return (
    <div className='avatar-container'>
      <Dropdown
        trigger={['click']}
        overlayClassName='avatar-container-menu'
        overlay={menu}
        placement='bottomRight'>
        <img className='avatar' src={avatarBoy}></img>
      </Dropdown>
    </div>
  );
}

export {
  Avatar
};