"use strict";

const { Application } = require("egg");

const Controller = require("egg").Controller;

class HomeController extends Controller {
  // 轮播图
  async slider() {
    const { ctx } = this;
    let result = await this.ctx.service.home.slider();
    ctx.body = result;
  }

  // 热门图书
  async homehot() {
    const { ctx } = this;
    let result = await this.ctx.service.home.homehot();
    ctx.body = result;
  }

  // 最新图书
  async newbook() {
    const { ctx } = this;
    let result = await this.ctx.service.home.newbook();
    ctx.body = result;
  }
}

module.exports = HomeController;
