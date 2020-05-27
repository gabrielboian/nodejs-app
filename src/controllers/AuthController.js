const User = require('../models/User');
const SocialUser = require('../models/SocialUser');
const bcrypt = require('bcryptjs');

module.exports = {
    async storeLocal(req, res) {

        // just a simple register user
        // we get from body name, email and password. We can use both json or url path
        // get the password, encrypt and save on db

        const { name, email, password } = req.body;

        const searchUser = await User.findOne({
            where: {
                email: email
            }
        })

        if(searchUser) return null

        let encryptPassowrd = bcrypt.hashSync(password)

        const user = await User.create({
            name, email, password: encryptPassowrd
        })

        return res.json(user);
    },

    async storeSocial(req, res) {
        // in store social when we use findorcreate in sequelize we got 2 params
        // the firts is our user and the second is true or false if user founded or create
        const { user } = await SocialUser.findOrCreate({
            where: {
                social_id: req.id
            },
            defaults: {
                social_id: req.id,
                name: req.name.givenName + " " + req.name.familyName,
                email: req.emails[0].value,
            }
        })

        return res.json(user);

    },

    async login(req, res) {

        // simple login path get username as email and decrypt our password

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } })

        if (!user) return res.send('User or Password incorrect')

        const passwordMatch = bcrypt.compareSync(password, user.password)

        if (!passwordMatch) return res.send('User or Password incorrect')

        return res.json(user);


    },
}