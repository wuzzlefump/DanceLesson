const User = require("../models/User");
const passport = require("passport")
const LocalStrategy= require("passport-local").Strategy

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    })
})
passport.use(
    new LocalStrategy({usernameField:"username"} , (username,password,done)=>{
        User.findOne({username: username}).then(user=>{
            if(err) throw err;
            if(user.password === password){
                return done(null,user)
            }else{
                return done(null,false, {message: "Wrong password"})
            }
        });
    })
    // .catch( err =>{
    //     return done(null,false,{message: err});
    // })
);

module.exports = passport;