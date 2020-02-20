const router = require('express').Router();
const products = require('../models/product');
const url = require('url');
const jsonParser = require('body-parser').json();


router.get('/', async (req, res) => {
    try {
     
    //   if (Object.keys(req.query).length > 0) {
    //     for (let i in req.query) {
    //       regex = new RegExp('^'+req.query[i])
    //       query[i] = { $regex: regex , $options:'i'}
    //     }
        
    //     product = await products.find(query);
    //   } else {
        productList = await products.find();
    //   }
  
      res.json(productList);
    } catch (err) { throw err }
  })
 

router.get('/:id', async function(req,res){ 
    try {
        let product = await products.findOne({ _id: req.params.id });
        res.json(product);
      } catch (err) { throw err; }
    })

    router.post('/', jsonParser, async (req, res) => {
        try {
          let product = new products(req.body)
          await product.save();
          res.status(201).json(product);
        } catch (err) { throw err }
      
      })

    router.patch('/:id', jsonParser, async (req, res) => {
        try {
          let product = await products.findOneAndUpdate(
            { _id: req.params.id }, req.body)
          res.status(200).json(product);
        } catch (err) { throw err }
      
      })
router.delete('/:id', async (req, res) => {
    try {
      await products.findOneAndDelete({ _id: req.params.id })
      res.status(200);
    } catch (err) { throw err }
  
  })

module.exports = router;