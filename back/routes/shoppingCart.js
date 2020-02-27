const router = require('express').Router();
const carts = require('../models/shoppingCart');
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    try {
        cartList = await carts.find();
        res.json(cartList);
    }catch (err) {
        throw err
    }
})

router.get('/:id', async function (req, res) {
    try {
        let cart = await carts.findOne({ _id: req.params.id });
        res.json(cart);
    } catch (err) {
        throw err;
    }
})

router.get('/userCart/:id', async function (req, res) {
    try {
        let cart = await carts.findOne({ id_user: req.params.id });
        res.json(cart);
    } catch (err) {
        throw err;
    }
}) 
// router.post('/', jsonParser, async (req, res) => {
//     try {
//         let cart = new products(req.body)
//         await carts.save();
//         res.status(201).json(cart);
//     } catch (err) { throw err }
// })

// router.patch('/:id', jsonParser, async (req, res) => {
//     try {
//         let cart = await carts.findOneAndUpdate({ _id: req.params.id }, req.body)
//         res.status(200).json(cart);
//     } catch (err) {
//         throw err
//     }
// })

router.put('/:cartid', jsonParser, async (req, res) => {
    try {
        console.log(req.body._id)
        let cart = await carts.findOneAndUpdate({ _id: req.params.cartid }, { $pull: { products: { _id: req.body._id } } }, { new: true })
        res.status(200).send(cart);
    } catch (err) {
        throw err
    }
})

router.post('/:cartid', jsonParser, async (req, res) => {
    try {
        let cart = await carts.findOneAndUpdate({ _id: req.params.cartid }, { $push: { products:  req.body  } }, { new: true })
        res.status(200).send(cart);
    } catch (err) {
        throw err
    }
})

// router.post('/qte/:cartid', jsonParser, async (req, res) => {
//     try {
//         let cart = await carts.findOneAndUpdate(
//             {  _id: req.params.cartid }, 
//             { $set: { products: { _id: req.body.myProduct.id, qte:  req.body.myProduct.qte } } }, 
//             { new: true }
//         )
//         res.status(200).send(cart);
//     } catch (err) {
//         throw err
//     }
// })

module.exports = router;