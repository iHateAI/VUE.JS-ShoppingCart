const mysql = require('../config/mysql');

module.exports = class User {
  constructor(user) {
    this.email = user.email;
    (this.password = user.password), (this.name = user.name);
  }
  // 유저 컬럼 만들기
  async create() {
    const result = await mysql.query(
      'INSERT INTO users(email, password, name) VALUES(?,?,?)',
      [this.email, this.password, this.name]
    );
    return result;
  }

  async findByEmail() {
    const [rows, fields] = await mysql.query(
      'SELECT * FROM users WHERE email=?',
      [this.email]
    );
    return [rows];
  }
};
