var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
})

module.exports = mongoose.model("Users", userSchema)

