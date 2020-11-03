"use strict";

const Service = require("egg").Service;

class AllbookService extends Service {
  // 获取分类
  async gettype() {
    const { ctx } = this;

    const sql = `SELECT type FROM book GROUP BY type`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  // 默认加载
  async defaultbook() {
    const { ctx } = this;

    const sql = `SELECT id, image, name, author, price FROM book ORDER BY predate desc LIMIT 0, 10`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  // 按分类加载
  async gettypebook(type) {
    const { ctx } = this;

    const sql = `SELECT id, image, name, author, price FROM book WHERE type='${type}' LIMIT 0, 10`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  // 模糊搜索
  async searchBook(book) {
    const { ctx } = this;

    console.log(book);
    const sql = `SELECT id, image, name, author, price FROM book WHERE name LIKE '%${book}%'`;
    let data = await this.app.mysql.query(sql);

    return data;
  }
}

module.exports = AllbookService;
