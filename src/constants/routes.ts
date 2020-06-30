const ROUTES = {
  Root: '/',                       // 首页
  Login: '/login',                 // 登录页面
  Register: '/Register',           // 注册页面
  Home: '/home',                   // 首页
  User: '/user',                   // 用户主页
  Practice: '/practice',             // 练习页面
  Browse: '/browse',                // 浏览所有问题页面
  Statistic: '/statistic',           // 统计页面
  Notification: '/notification',   // 通知页面
  Subscribed: '/subscribed',       // 标签管理页面
  Setting: '/setting',             // 设置页面
  About: '/about',                 // 设置页面
  Email: {                          // 邮箱相关页面
    Base: '/email',                  
    Send: '/email/send',
    Success: '/email/success',
    Fail: '/email/fail',
  },  
  ResetPassword: {
    Base: '/reset-password',
    NewPwd: '/reset-password/new-pwd',    // 点击邮箱发送的链接后，设置新密码
    EnterAccount: '/reset-password/enter-account', // 输入邮箱发送邮件
    SendEmail: '/reset-password/send-email', // 邮箱发送后的提示
    Success: '/reset-password/success', // 密码修改成功后的提示
  },
  Cards: {     // 问答卡相关页面  
    Base: '/cards',
    Edit: '/cards/edit',
    New: '/cards/new',
  },                            
};

export {
  ROUTES
};
