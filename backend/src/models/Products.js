const mysql = require('../config/mysql');

module.exports = class Products {
  constructor() {}

  async findAll() {
    const [rows] = await mysql.query('SELECT * FROM products');
    return rows;
  }
};
