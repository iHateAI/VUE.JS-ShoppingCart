const cartsModel = require('../models/Carts');

const process = {
  addCarts: async (req, res) => {
    const data = req.body;
    const Carts = new cartsModel(data);
    try {
      Carts.create();
      res.send('성공');
    } catch(error) {
      res.send(error);
    }
  },
  getCartsInfo: async (req, res) => {
    const data = {
      userId: null,
      id: null,
      brand: null,
      name: null,
      size: null,
      price: null,
      imgurl: null,
    }
    const Carts = new cartsModel(data);
    try {
      const rows = Carts.findAll();
      res.json(rows);
    } catch(error) {
      res.send(error);
    }
  }
}

module.exports = {
  process,
}