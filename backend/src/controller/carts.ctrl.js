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
    const {userId} = req.params;
    const Carts = new cartsModel({userId: userId});
    try {
      const rows = await Carts.findByUserId();
      res.json(rows);
    } catch(error) {
      res.send(error);
    }
  }
}

module.exports = {
  process,
}