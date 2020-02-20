const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {type :String, required : true},
    description_short: {type :String}
 
});

var Categorie = mongoose.model('Categorie', catSchema);
module.exports = Categorie;