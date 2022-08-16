const express = require('express');

const ctrl = require('../controller/carts.ctrl');

const router = express.Router();

router.get('/:userId', ctrl.process.getCartsInfo);
router.post('/', ctrl.process.addCarts);



module.exports = router;