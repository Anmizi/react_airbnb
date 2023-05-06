import IconAvator from '@/assets/svg/icon_avator';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import React, { memo } from 'react'
import { RightWrapper } from './style'
const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className='login'>登录</span>
        <span className='register'>注册</span>
        <span className="language">
          <IconGlobal />
        </span>
      </div>
      <div className="profile">
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvator />
        </div>
      </div>
    </RightWrapper>
  );
})

export default HeaderRight