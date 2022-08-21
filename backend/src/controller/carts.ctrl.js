const cartsModel = require('../models/Carts');

const process = {
  addCarts: async (req, res) => {
    const data = req.body;
    const Carts = new cartsModel(data);
    try {
      Carts.create();
      res.send('성공');
    } catch (error) {
      res.send(error);
    }
  },
  getCartsInfo: async (req, res) => {
    const { userId } = req.params;
    const Carts = new cartsModel({ userId: userId });
    try {
      const rows = await Carts.findByUserId();
      res.json(rows);
    } catch (error) {
      res.send(error);
    }
  },
  deleteOneCartsInfo: async (req, res) => {
    const { id } = req.params;
    const Carts = new cartsModel({ cartId: id });
    try {
      await Carts.deleteOne();
      res.json({
        ok: true,
        message: '해당 항목이 삭제되었습니다.',
      });
    } catch (error) {
      res.send({
        ok: false,
        message: '삭제되지 않았습니다.',
      });
    }
  },
};

module.exports = {
  process,
};
