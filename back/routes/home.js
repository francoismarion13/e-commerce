const router = require('express').Router();
const home = require('../models/home');
const url = require('url');
const jsonParser = require('body-parser').json();


router.get('/', async (req, res) => {
    try {
        homeList = await products.find().limit(12);
        res.json(homeList);
    } catch (err) { throw err }
  })
 


