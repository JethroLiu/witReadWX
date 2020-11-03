"use strict";

const { Application } = require("egg");

const Controller = require("egg").Controller;

class NewsController extends Controller {
  // 获取新闻
  async news() {
    const { ctx } = this;
    let result = await ctx.service.news.news();
    ctx.body = result;
  }
}

module.exports = NewsController;
