"use strict";

const { Application } = require("egg");

const Controller = require("egg").Controller;

class AllbookController extends Controller {
  // 获取分类
  async gettype() {
    const { ctx } = this;
    let result = await this.ctx.service.allbook.gettype();
    ctx.body = result;
  }

  // 获取全部图书
  async getallbook() {
    const { ctx } = this;

    if (ctx.request.query.type == "全部" /* 首屏加载 */) {
      let result = await this.ctx.service.allbook.defaultbook();
      ctx.body = result;
    } else {
      let result = await this.ctx.service.allbook.gettypebook(ctx.request.query.type);
      ctx.body = result;
    }
  }

  // 搜索图书
  async searchBook() {
    const { ctx } = this;

    let result = await this.ctx.service.allbook.searchBook(this.ctx.request.query.book);
    ctx.body = result;
  }
}

module.exports = AllbookController;
