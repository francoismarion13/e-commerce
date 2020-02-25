const router = require('express').Router();
const payments = require('../models/payments');
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
// router.get('/', async (req, res) => {
//     try {
//         cartList = await carts.find();
//         res.json(cartList);
//     }catch (err) {
//         throw err
//     }
// })
router.get('/', async function (req, res) {
    try {
        let paymentsAll = await payments.find();
        res.json(paymentsAll);
    } catch (payments) {
        throw payments;
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



module.exports = router;