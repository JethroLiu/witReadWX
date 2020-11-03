"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
  // 轮播图
  async news() {
    const { ctx } = this;

    const sql = `SELECT * FROM news ORDER BY predate DESC LIMIT 0, 20`;
    let data = await this.app.mysql.query(sql);

    return data;
  }
}

module.exports = NewsService;
