const bcrypt = require('bcrypt');
const passport = require('passport');
const userModel = require('../models/User');

const process = {
  // 로그인 처리
  login: async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
      if(authError) {
        return next(authError);
      }
      if (!user) {
        return res.send(info.message);
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          return res.send(info.message);
        }
        return res.send('success');
      });
    })(req, res, next);
  },
  // 로그아웃 처리
  logout: (req, res) => {
    req.logout();
    req.session.destroy();
    console.log('로그아웃 처리된듯');
  },
  // 로그인 체크
  loginCheck: (req, res) => {
    console.log(req.isAuthenticated());
    res.send('gd');
  },
  // 회원가입 처리
  register: async (req, res) => {
    const hashedPw = await bcrypt.hash(req.body.password, 12);
    const data = {
      email: req.body.email,
      password: hashedPw,
      name: req.body.name,
    };
    const User = new userModel(data);
    try {
      const rows = await User.findByEmail();
      if (rows.length > 0) {
        //return res.status(404).send('이미 존재하는 이메일입니다.');
        return res.json(rows[0]);
      }
      await User.create();
      res.status(201).send('회원가입이 완료되었습니다!');
    } catch (err) {
      res.status(404).json({
        err: err.toString(),
      });
    }
  },
};

module.exports = {
  process,
};
