const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id_user: { Type: Number, required: true },
    isValidate: { Type: Boolean, default: false },
    products: { type: [{
        _id: { Type: Number, required: true },
        name: { Type: String, required: true },
        qte: { Type: Number, required: true },
        price: { Type: Number, required: true },
        tax: { Type: Number, required: true }
    }], required: true },
    total_price: Number,
    promo_code: Number
});

var Carts = mongoose.model('Cart', cartSchema);
module.exports = Carts;