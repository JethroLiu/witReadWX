"use strict";

const { Application } = require("egg");

const Controller = require("egg").Controller;

class BookDetailController extends Controller {
  async bookDetail() {
    const { ctx } = this;

    await this.ctx.service.bookDetail.addClick(ctx.request.query.bookId); // 增加图书点击量
    let result /* 图书详情 */ = await this.ctx.service.bookDetail.bookDetail(ctx.request.query.bookId);

    ctx.body = result;
  }
}

module.exports = BookDetailController;
