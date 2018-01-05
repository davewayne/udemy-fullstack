const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
require('./models/User');
require('./services/passport');

const cookieSession = require('cookie-session');

mongoose.connect(keys.mongoURI)
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//clientid
//368372746807-oq886r3gmgb80oh7cr344vkvt812ang9.apps.googleusercontent.com
//secret
// WgeWhdKeMB-lM87w9IlD10dB

const PORT = process.env.PORT || 5000;
app.listen(PORT);