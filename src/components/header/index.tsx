import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@assets/icons/logo.png';

import './index.scss';

interface IProps {

}

function Header(props: IProps) {
  return (
    <header id='ecode-header'>
      <div className='container'>
        <NavLink to="/">
          <div className='header-logo'>
            <img className='logo' src={logo}></img>
          </div>
        </NavLink>
        <nav className='main-nav'>
          <ul className='ul-format nav-list'>
            <li>
              浏览
            </li>
            <li>
              统计
            </li>
            <li>
              答题
            </li>
            <li>
              通知
            </li>
            <li>
              头像
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export {
  Header
};