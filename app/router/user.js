'use strict';

module.exports = app => {
  const { router, controller } = app;

  //-------------------------------------------------------------------------
  // user
  //-------------------------------------------------------------------------

  // 登录
  router.post('/api/user/login', controller.api.user.login);
  // 注册
  router.post('/api/user/reg', controller.api.user.reg);
  // 退出
  router.post('/api/user/logout', controller.api.user.logout);
  // 信息
  router.post('/api/user/info', controller.api.user.info);

  // 重设密码
  router.post('/api/user/resetpw', controller.api.user.resetpw);
  // 注册Key
  router.post('/api/regkey', controller.api.user.regkey);
};
