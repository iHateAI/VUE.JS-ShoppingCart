const express = require('express');

const router = express.Router();

//컨트롤러 불러오기
const ctrl =  require('../controller/home.ctrl');

router.get('/', ctrl.process.login);

module.exports = router;
