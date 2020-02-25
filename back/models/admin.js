const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    lastname: { type: String, required : true },
    firstname: { type: String, required : true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;