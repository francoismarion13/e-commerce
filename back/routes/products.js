const router = require('express').Router();
const products = require('../models/product');
const url = require('url')

// Get all /users
router.get('/', async (req, res) => {
    console.log("home products")
//   try {
//     let products;
//     let query = {}
//     if (Object.keys(req.query).length > 0) {
//       for (let i in req.query) {
//         regex = new RegExp('^'+req.query[i])
//         query[i] = { $regex: regex , $options:'i'}
//       }
      
//       product = await Products.find(query);
//     } else {
//       product = await Products.find();
//     }

//     res.json(products);
//   } catch (err) { throw err }
})
// Get one /users/:id
// router.get('/:id', async (req, res) => {
//   try {
//     let user = await User.findOne({ _id: req.params.id });
//     res.json(user);
//   } catch (err) { throw err; }
// })
// Create one /users
// router.post('/', jsonParser, async (req, res) => {
//   try {
//     let user = new User(req.body)
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) { throw err }

// })
// Update one /users/:id
// router.patch('/:id', jsonParser, async (req, res) => {
//   try {
//     let user = await User.findOneAndUpdate(
//       { _id: req.params.id }, req.body)
//     res.status(200).json(user);
//   } catch (err) { throw err }

// })
// Delete one /users/:id
// router.delete('/:id', async (req, res) => {
//   try {
//     await User.findOneAndDelete({ _id: req.params.id })
//     res.status(200);
//   } catch (err) { throw err }

// })
module.exports = router;