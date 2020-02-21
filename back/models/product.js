const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type :String, required : true},
    ean13:{type :Number, required : true},
    description_short: {type :String, required : true},
    description: {type : Number},
    price: {type : Number, required: true},
    reduction: {type : Number},
    low_stock_alert: {type : Number},
    images: {type : String, required: true},
    qte: {type : Number, required: true},
    on_sale: {type : Boolean, required: true},
    marque: {type : String, required: true},
    tax: {type : Number},
    size: {type : String, required: true},
    id_categorie: {type : Number, required: true}
});

var Products = mongoose.model('Product', userSchema);
module.exports = Products;


