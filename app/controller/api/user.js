'use strict';

const Controller = require('./base');

class AccountController extends Controller {
  constructor(ctx) {
    super(ctx);
    // this.accountService = ctx.grpc.explorer.account;
  }

  async getAccount() {
    // const { ctx, accountService } = this;
    const { ctx } = this;
    const account = ctx.query.account || '';
    console.log("get--test")

    // const res = await accountService.getAccount({ account });
    const res  = {account:111}
    const rspData = res.account;
    this.success(rspData);
  }

  // 登录 login
  async login() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }
// 注册 reg
  async reg() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }
    // 退出 logout

  async logout() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }
    // 信息 info

  async info() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }

  // 重设密码 resetpw
  async resetpw() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }

  // 注册Key regkey
  async regkey() {
    const { ctx } = this;
    const account = ctx.request.body || '';
    console.log("post--test")

    const res  = {account:account}
    const rspData = res.account;
    this.success(rspData);
  }

}

module.exports = AccountController;
