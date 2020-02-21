const router = require('express').Router();
const carts = require('../models/shoppingCart');
const jsonParser = require('body-parser').json();

// router.get('/', async (req, res) => {
//     try {
//         cartList = await carts.find();
//         res.json(cartList);
//     }catch (err) {
//         throw err
//     }
// })

router.get('/:id', async function(req,res){ 
    try {
        let cart = await carts.findOne({ _id: req.params.id });
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

router.delete('/:id', async (req, res) => {
    try {
        await carts.findOneAndDelete({ _id: req.params.id })
        res.status(200);
    } catch (err) {
        throw err
    }
})

module.exports = router;