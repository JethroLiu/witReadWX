"use strict";

const Service = require("egg").Service;

class HomeService extends Service {
  // 轮播图
  async slider() {
    const { ctx } = this;

    const sql = `SELECT * FROM lbt`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  // 热门图书
  async homehot() {
    const { ctx } = this;

    const sql = `SELECT id, image, name, author, price FROM book ORDER BY clicks desc LIMIT 0, 4`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  // 最新图书
  async newbook() {
    const { ctx } = this;

    const sql = `SELECT id, image, name, author, price FROM book ORDER BY predate desc LIMIT 0, 4`;
    let data = await this.app.mysql.query(sql);

    return data;
  }
}

module.exports = HomeService;
