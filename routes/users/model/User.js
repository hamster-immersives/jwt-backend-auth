const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const UserSchema = new mongoose.Schema({
    email: {type: String, default: ""},
    username: {type: String, default: ""},
    password: {type: String, default: ""},
    timestamp: {type: String, default: now.format('dddd, MMMM do YYYY, h:mm:ss a')},
}) 

module.exports = mongoose.model("users", UserSchema);