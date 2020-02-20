const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type :String, required : true},
    ean13:{type :Number, required : true},
    description_short: {type :String, required : true},
    description: {type : Number},
    price: {type : String, requirede: true},
    reduction: {type : Number},
    low_stock_alert: {type : Number},
    images: {type : String, requirede: true},
    qte: {type : Number, requirede: true},
    on_sale: {type : Boolean, requirede: true},
    marque: {type : String, requirede: true},
    tax: {type : Number},
    size: {type : String, requirede: true},
    id_categorie: {type : Number, requirede: true}
});

var Products = mongoose.model('Product', productSchema);
module.exports = Products;