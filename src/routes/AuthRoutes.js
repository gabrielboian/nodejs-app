const express = require('express');
const router = express.Router();
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;
const AuthController = require('../controllers/AuthController');


// organic login
router.post('/register', AuthController.storeLocal);
router.post('/login', AuthController.login);

// facebook auth
router.get('/facebook',
    passport.authenticate('facebook', {
        scope: ['email']
    })
);

router.get('/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        req.flash('success', `Seja bem vindo ${req.name}`)
        res.redirect('/');
    });

passport.use(new facebookStrategy({
    clientID: "YOUR CLIENT ID",
    clientSecret: "YOUR SECRET",
    callbackURL: "/auth/facebook/return",
    profileFields: ['id', 'emails', 'name']
},

    function (accessToken, refreshToken, profile, cb) {
        AuthController.storeSocial(profile).then(user => {
            return cb(null, user);
        }
        ).catch(
            (error => {
                return cb(error);
            })
        )
    }
));

//google auth
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/return',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        req.flash('success', `Seja bem vindo ${req.name}`)
        res.redirect('/')
    });

passport.use(new googleStrategy({
    clientID: "YOUR CLIENT ID",
    clientSecret: "YOUR SECRET",
    callbackURL: "/auth/google/return",
},
    function (accessToken, refreshToken, profile, cb) {
        AuthController.storeSocial(profile).then(user => {
            return cb(null, user);
        }
        ).catch(
            (error => {
                return cb(error);
            })
        )
    }
));

// serializer for passport
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = router;