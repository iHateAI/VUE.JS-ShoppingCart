const mysql = require('../config/mysql');

module.exports = class User {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
  }
  // 회원 정보 생성
  async create() {
    const result = await mysql.query(
      'INSERT INTO users(email, password, name) VALUES(?,?,?)',
      [this.email, this.password, this.name]
    );
    return result;
  }

  // 이메일로 회원 정보 조희
  async findByEmail() {
    const [rows] = await mysql.query('SELECT * FROM users WHERE email=?', [
      this.email,
    ]);
    return rows;
  }

  // 모든 회원 정보 조회
  async findAll() {
    const [rows] = await mysql.query('SELECT * FROM users');
    return rows;
  }
};
