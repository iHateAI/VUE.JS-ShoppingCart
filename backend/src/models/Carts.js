const mysql = require('../config/mysql');

module.exports = class Carts {
  constructor(product) {
    this.userId = product.userId;
    this.productId = product.id;
    this.brand = product.brand;
    this.name = product.name;
    this.size = product.size;
    this.price = product.price;
    this.imgurl = product.imgurl;
  }

  async create() {
    const existingInfo = await this.findById();

    if (existingInfo.length > 0) {
      const result = this.updateCountByProductId();
      
    } else {
      const result = await mysql.query(
        'INSERT INTO cart(user_id, product_id, brand, name, size, price, count, imgurl) VALUES(?,?,?,?,?,?,?,?)',
        [
          this.userId,
          this.productId,
          this.brand,
          this.name,
          this.size,
          this.price,
          1,
          this.imgurl,
        ]
      );
    }
  }

  async findAll() {
    try {
      conse [rows] = await mysql.query('SELECT * FROM cart');
      return rows;
    } catch(error) {
      console.log(error);
    }
  }

  async findById() {
    try {
      const [rows] = await mysql.query(
        'SELECT * FROM cart WHERE product_id = ?',
        [this.productId]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCountByProductId() {
    try {
      const result = await mysql.query(
        'UPDATE cart SET count = count + 1 WHERE product_id = ?',
        [this.productId]
      );
      console.log('업데이트');
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      const result = await mysql.query('DELETE FROM cart');
      console.log('삭제');
    } catch (error) {
      console.log(error);
    }
  }
};
