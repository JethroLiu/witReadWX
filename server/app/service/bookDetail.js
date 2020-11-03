"use strict";

const Service = require("egg").Service;

class BookDetailService extends Service {
  async bookDetail(bookId) {
    const sql = `SELECT * FROM book WHERE id = ${bookId}`;
    let data = await this.app.mysql.query(sql);

    return data;
  }

  async addClick(bookId) {
    const sql = `UPDATE book SET clicks = clicks + 1 WHERE id = ${bookId}`;
    let data = await this.app.mysql.query(sql);

    return data;
  }
}

module.exports = BookDetailService;
