const Sequelize = require('sequelize');
const dbConfig = require('./database');


const User = require('../../models/User');
const SocialUser = require('../../models/SocialUser');

const connection = new Sequelize(dbConfig);

User.init(connection);
SocialUser.init(connection);


module.exports = connection;