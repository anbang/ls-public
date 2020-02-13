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

  async userLogin() {
    // const { ctx, accountService } = this;
    const { ctx } = this;
    const account = ctx.query.account || '';
    console.log("post--test")

    // const res = await accountService.getAccount({ account });
    const res  = {account:222}
    const rspData = res.account;
    this.success(rspData);
  }

}

module.exports = AccountController;
