const express = require('express');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();
const User = require('./models/users')

const smsRouter = require('./routes/smsRoutes');
const apiV2Router = require('./routes/apiV2Routes');
const apiV3Router = require('./routes/apiV3Routes');

const app = express();

// cookieSession config
app.use(cookieSession({ 
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    secret: process.env.COOKIE_KEY
}));

app.use(passport.initialize());
app.use(passport.session());

//flash messaging middleware
app.use(flash());

//STRATEGY CONFIG
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'https://mr-grocery.herokuapp.com/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.find({id: profile.id});
        if(user[0]){
            return done(null, user[0].name)
        } else {
            return done(null, false, { message: 'Incorrect username.' });
        }
    } catch (error) {
        console.log(error);
        return done(null, false, { message: 'something went wrong' });
    }
}
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Middleware to check if the user is authenticated
isLoggedIn = (req ,res, next) => {
    if(req.isAuthenticated()){
      return next();
    }else{
      return res.redirect('/login');
  }
}

//more middleware that i don't fully understand
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//enables cors requests for all routes
app.use(cors());

app.get('/login',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/login'
}));


//API END-POINT ROUTES
app.use('/sms', smsRouter);
app.use('/api/v2', apiV2Router);
app.use('/api/v3', isLoggedIn, apiV3Router);

//HANDLES GET REQUEST FOR FRONT-END
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


module.exports = app;
