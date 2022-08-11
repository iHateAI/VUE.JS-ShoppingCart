const passport = require('passport');
const strategy = require('./strategy');

const userModel = require('../models/User');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.email);
  })

  passport.deserializeUser(async (email, done) => {
    console.log(email);
    const User = new userModel({email, password: null, name: null});
    try {
      const result = await User.findByEmail();
      done(null, result[0]);
    } catch(err) {
      done(err);
    }
  });

  strategy();
}