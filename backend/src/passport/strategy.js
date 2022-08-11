const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const userModel = require('../models/User');

module.exports = () => {
  passport.use(
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
    }, async (email, password, done) => {
      const User = new userModel({email, password, name: null});
      try {
        const userInfo = await User.findByEmail();
        if (userInfo.length > 0) {
          const isRightPassword = await bcrypt.compare(password, userInfo[0].password);
          if (isRightPassword) {
            done(null, userInfo[0]);
          } else {
            done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
          }
        } else {
          done(null, false, {message: '가입되지 않은 이메일입니다.'});
        }
      } catch(err) {
        console.log(err);
        done(err);
      }
    })
  );
};
