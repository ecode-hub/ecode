import React from 'react';
import { sendConfirmEmail } from '@services';
import { $storage } from '@utils';
import { message } from 'antd';


function ResendEmail() {
  const onResendEmail = () => {
    sendConfirmEmail($storage.userData.id).then(res=>{
      message.success(res.message);
    }).catch(err=>{
      message.warn(err.message);
    });
  };
  return (
    <div>尝试 <span className='a' onClick={onResendEmail}>重新发送</span> 邮件</div>
  );
}

export {
  ResendEmail
};
