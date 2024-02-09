const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserId: Number,
    Username: String,
    Email: String,
    RegistrationDate: Date
})

const user = mongoose.model('user', userSchema)
module.exports = user;