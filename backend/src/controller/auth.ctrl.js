const bcrypt = require('bcrypt');

const userModel = require('../models/User');

const process = {
  // 로그인 처리
  login: (req, res) => {
    res.json({
      test: 'testdata',
    });
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
        return res.status(404).send('이미 존재하는 이메일입니다.');
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
