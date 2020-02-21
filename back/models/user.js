const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: { type: String, required: true, enum: ['Madame','Monsieur'] },
    lastname: { type: String, required : true },
    firstname: { type: String, required : true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    cards: { type: [{
        cardNumber: { type: Number, required: true },
        cardUserName: { type: String, required: true },
        cardDate: { type: String, required: true },
        cardSecretVerif: { type: Number, required: true }
    }]},
    adresses: { type: [{
       adresse1: { type: String, required: true },
       adresse2: { type: String },
       codePostal: { type: String, required: true },
       ville: { type: String, required: true }
    }]}
});

var User = mongoose.model('Categorie', userSchema);
module.exports = User;