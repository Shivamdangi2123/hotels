const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');


passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await Person.findOne({ username: username });
    if (!user)
      return done(null, false, { massage: 'incorrect username' });
const pass =user.comparePassword(password);
    if (pass) {
      return done(null, user)
    } else {
      return done(null, false, { massage: 'incorrect password' })
    }

  } catch (err) {
    return done(err);
  }
}))
module.exports= passport;