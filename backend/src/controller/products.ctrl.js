const productsModel = require('../models/Products');

const view = {
  sendProductsData: async (req, res) => {
    const Products = new productsModel();
    const rows = await Products.findAll();
    res.json(rows); 
  },
};

module.exports = {
  view,
}