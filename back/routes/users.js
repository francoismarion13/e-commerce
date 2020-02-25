const router = require('express').Router();
const User = require('../models/user');
const url = require('url');
const jsonParser = require('body-parser').json();

router.get('/', async (req,res) => {
    try{
        let users;
        let query = {};
        if(Object.keys(req.query).length > 0){
            for(let i in req.query){
                newRegex = new RegExp('^' + req.query[i]);
                query[i] = { $regex: newRegex, $options:'i' };
            }
            users = await user.find(query);
        }else{
            users = await user.find();
        }
        res.status(200).json(users);
    }catch(err){
        throw err;
    }
});

router.get('/:id', async (req, res) => {
    try {
        userProfile = await User.findOne({ _id: req.params.id });
        res.json(userProfile);
    } catch (err) { throw err }
})

router.post('/', jsonParser, async (req,res) => {
    try{
        let userCreate = new User(req.body);
        await userCreate.save();
        res.status(201).json(userCreate);
    }catch(err){
        throw err;
    }
});

router.post('/login', jsonParser, async (req,res) => {
    try{
        let userProfile = await User.findOne({ username: req.body.username, 
            password: req.body.password });
        res.status(200).json(userProfile);
    }catch(err){
        console.log("User not found")
        throw err;
    }
});

// router.get('/login/:id', async (req,res) => {
//     try{
//         userProfile = await User.findOne({ _id: req.params.id });
//         res.status(200).json(userProfile);
//     }catch(err){
//         console.log(err.message)
//         throw err;
//     }
// });

module.exports = router;