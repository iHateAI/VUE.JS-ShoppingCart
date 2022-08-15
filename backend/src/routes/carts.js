const express = require('express');

const ctrl = require('../controller/carts.ctrl');

const router = express.Router();

router.get('/', ctrl.process.getCartsInfo);
router.post('/', ctrl.process.addCarts);



module.exports = router;