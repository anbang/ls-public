'use strict';

module.exports = app => {
  const { router, controller } = app;

  //-------------------------------------------------------------------------
  // user
  //-------------------------------------------------------------------------

  // 登录 login
  router.get('/api/user/login', controller.api.user.getAccount);
  router.post('/api/user/login', controller.api.user.userLogin);
  // 注册 reg
  router.get('/api/user/reg', controller.api.user.getAccount);
  // 退出 logout
  router.get('/api/user/logout', controller.api.user.getAccount);
  // 信息 info
  router.get('/api/user/info', controller.api.user.getAccount);

  // 重设密码 resetpw
  router.get('/api/user/resetpw', controller.api.user.getAccount);
  // 注册Key regkey
  router.get('/api/regkey', controller.api.user.getAccount);
};
