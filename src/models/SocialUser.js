// if you are using mongoose
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    social_id: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)

// if you are using sequelize
const { Model, DataTypes } = require('sequelize');

class SocialUser extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            social_id:DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'social_user'
        })
    }
}

module.exports = SocialUser;