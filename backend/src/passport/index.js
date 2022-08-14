const passport = require('passport');
const strategy = require('./strategy');

const userModel = require('../models/User');

module.exports = () => {
  passport.serializeUser((user, done) => { 
    console.log('serialize', user);
    done(null, user.email);
  })
 
  passport.deserializeUser(async (email, done) => {
    console.log('deserializeUs', email);
    const User = new userModel({email, password: null, name: null});
    try {
      const result = await User.findByEmail();
      const data = {
        id: result[0].id,
        email: result[0].email,
        name: result[0].name,
      }
      done(null, data);
    } catch(err) {
      done(err);
    }
  });

  strategy();
}