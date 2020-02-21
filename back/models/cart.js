const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id_user: { type: Number, required: true },
    isValidate: { type: Boolean, default: false },
    products: { type: [{
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        qte: { type: Number, required: true },
        price: { type: Number, required: true },
        tax: { type: Number, required: true }
    }], required: true },
    total_price: Number,
    promo_code: Number
});

var Carts = mongoose.model('Cart', cartSchema);
module.exports = Carts;