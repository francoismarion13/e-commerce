const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    id_cart: {type :Number, required : true},
    id_user: {type :Number},
    lastname: { type: String, required : true },
    firstname: { type: String, required : true },
    email: { type: String, required: true },
    username: { type: String, required: true },  
    cards: { type: [{
        cardNumber: { type: Number, required: true },
        cardUserName: { type: Number, required: true },
        cardDate: { type: String, required: true },
        cardSecretVerif: { type: Number, required: true }
    }]},
    adresses: { type: [{
        adresse1: { type: String, required: true },
        adresse2: { type: String },
        codePostal: { type: Number, required: true },
        ville: { type: String, required: true }
     }]}
});

var Payments = mongoose.model('Payments', paymentSchema);
module.exports = Payments;