const express = require('express');

const router = express.Router();

//컨트롤러 불러오기
const ctrl = require('../controller/auth.ctrl');

router.post('/register', ctrl.process.register);

module.exports = router;
