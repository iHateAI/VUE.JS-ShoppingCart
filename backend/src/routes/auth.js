const express = require('express');

const router = express.Router();

//컨트롤러 불러오기
const ctrl = require('../controller/auth.ctrl');

router.post('/login', ctrl.process.login);
router.get('/logout', ctrl.process.logout);
router.post('/register', ctrl.process.register);
router.post('/check', ctrl.process.loginCheck);
module.exports = router;
