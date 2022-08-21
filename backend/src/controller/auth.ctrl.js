const bcrypt = require('bcrypt');
const passport = require('passport');
const userModel = require('../models/User');

const process = { 
  // 로그인 처리
  login: async (req, res, next) => {
    console.log('dd');
    passport.authenticate('local', (authError, user, info) => {
      if (authError) {
        return res.send(info.message);
      }
      if (!user) {
        return res.send(info.message);
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          return res.send(info.message);
        }
        return res.send({
          id: user.id,
          email: user.email,
          name: user.name,
        });
      });
    })(req, res, next);
  },
  // 로그아웃 처리
  logout: (req, res) => {
    req.logout();
    req.session.destroy();
    if (!req.isAuthenticated()) {
      res.cookie('connect.sid', '', {maxAge: 0});
      res.send(req.isAuthenticated());
    } else {
      res.send('error: 로그아웃 실패');
    }
  },
  // 로그인 체크
  loginCheck: (req, res) => {
    res.send(req.session.cookie);
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

  getUserInfo: (req, res) => {
    res.json(req.user);
  }
};

module.exports = {
  process,
};
