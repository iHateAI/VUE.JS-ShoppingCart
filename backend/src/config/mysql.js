const mysql = require('mysql2/promise');

// mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.DATABASE,
// });

module.exports = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'korea123',
  database: 'shopping_cart_project',
});