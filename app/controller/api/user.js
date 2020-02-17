'use strict';

const Controller = require('./base');

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const ERRCODE={
  incorrect:400,//请求数据不正确
}
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
    const { username,password } = ctx.request.body
    // 没有账号密码
    console.log(username,password);
    if(!username || !password){
      this.fail({
        code: ERRCODE.incorrect,
        message: '参数缺失:没有 username 或 password'
      });
    }
    //从sql里拿数据，生成Token
    const token = tokens[username]

    // 数据库没有找到该用户
    if (!token) {
      this.fail({
        code: ERRCODE.incorrect,
        message: '帐户和密码不正确。'
      });
    }

    // 找到了
    this.success({
      ...token,
      is_reset: true//需要重设密码
    });
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
