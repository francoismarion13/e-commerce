const router = require('express').Router();
const categories = require('../models/categorie');
const url = require('url');
const jsonParser = require('body-parser').json();


router.get('/', async (req, res) => {
    try {
        categoriesList = await categories.find();
        res.json(categoriesList);
    } catch (err) { throw err }
  })
 

  router.get('/:id', async function(req,res){ 
    try {
        let categorie = await categories.findOne({ _id: req.params.id });
        res.json(categorie);
      } catch (err) { throw err; }
    })

//     router.post('/', jsonParser, async (req, res) => {
//         try {
//           let product = new products(req.body)
//           await product.save();
//           res.status(201).json(product);
//         } catch (err) { throw err }
      
//       })

//     router.patch('/:id', jsonParser, async (req, res) => {
//         try {
//           let product = await products.findOneAndUpdate(
//             { _id: req.params.id }, req.body)
//           res.status(200).json(product);
//         } catch (err) { throw err }
      
//       })
// router.delete('/:id', async (req, res) => {
//     try {
//       await products.findOneAndDelete({ _id: req.params.id })
//       res.status(200);
//     } catch (err) { throw err }
  
//   })

module.exports = router;