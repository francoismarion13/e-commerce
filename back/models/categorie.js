const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type :String, required : true},
    description_short: {type :String}
 
});

var Categorie = mongoose.model('Categorie', userSchema);
module.exports = Categorie;