const express = require('express');

const ctrl = require('../controller/carts.ctrl');

const router = express.Router();

router.get('/:userId', ctrl.process.getCartsInfo);
router.post('/', ctrl.process.addCarts);
router.delete('/:id', ctrl.process.deleteOneCartsInfo);


module.exports = router;