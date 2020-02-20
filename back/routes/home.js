const router = require('express').Router();
const product = require('../models/product');
const url = require('url');
const jsonParser = require('body-parser').json();


router.get('/', async (req, res) => {
    try {
        homeList = await product.find().limit(12);
        res.json(homeList);
    } catch (err) { throw err }
  })
 
  module.exports = router;