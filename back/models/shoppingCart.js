const mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qte: { type: Number, required: true },
    img: { type: String },
    _id: { type: ObjectId }
})
const cartSchema = new Schema({
    id_user: { type: Number, required: true },
    is_validate: { type: Boolean, default: false },
    products: { type: [ProductSchema], required: true },
    total_price: Number,
    code_promo: Number,
    _id: { type: ObjectId }
});

var Carts = mongoose.model('Cart', cartSchema);
module.exports = Carts;