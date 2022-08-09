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
    const data = req.body;
    const User = new userModel(data);
    try {
      const result = await User.create()
      console.log('등록 성공');
      res.json(result);
      
    } catch (err) {
      console.log(err);
      console.log('실패');
    }
  },
};

module.exports = {
  process,
};
