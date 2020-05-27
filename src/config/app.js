const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const routerConfig = require('./routerConfig');

// enable static files
app.use(express.static(path.resolve(__dirname, '../', 'views')))
app.set('views', path.resolve(__dirname, '../', 'views'));
// app.set('view engine', 'ejs'); if you want to set any engine to use, usually i'm using ejs

//bodyparser config, this config is to set how we gonna get data from our routes
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//enable session
app.use(session({
    secret: 'create-one-strong-secret',
    // it's a good practice you create your oun name for the session
    name: 'connection-name',
    resave: false,
    saveUninitialized: true,
    // if you using ssl or tls use cookie
    // cookie: { secure: true }
}, {
    // set the max age for storage the cookie
    cookie: {
        maxAge: 10000
    }
}
))

// enable passport login for social users, for local user we gonna create our
app.use(passport.initialize());
app.use(passport.session());

// create a router config just as good practice
app.use('/', routerConfig);


//for the db connection you have two approaches
// using sequelize with Mysql, Postgress or other sql db
// using mongoDB with mongoose
// our AuthController use sequelize, but it's just change for mongoose on create, findorcreate
// you have to ready documentation

// to use mongoose uncomment this
// mongoose.connect('connection-url', { useNewUrlParser: true, useUnifiedTopology: true })
// let db = mongoose.connection

// to use SQLdb using sequelize uncomment
// require('./database');

// enable what port our server will runing
app.listen(3000)