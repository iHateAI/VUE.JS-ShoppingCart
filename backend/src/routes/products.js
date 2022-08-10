const express = require('express');
const ctrl = require('../controller/products.ctrl');

const router = express.Router();

router.get('/', ctrl.view.sendProductsData);

module.exports = router;