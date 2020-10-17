const db = require("../models");
const passport = require("passport")
const LocalStrategy= require("passport-local").Strategy


passport.use(
    new LocalStrategy(
      // Our user will sign in using a "username"
      {
        usernameField: "username"
      },
      (username, password, done) => {
        // When a user tries to sign in this code runs
        db.User.findOne({
            username: username
        }).then(dbUser => {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (dbUser.password !== password) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          // If none of the above, return the user
          return done(null, dbUser);
        });
      }
    )
  );


  passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((obj,done)=>{
        done(null,obj);
})
module.exports = passport;