const router = require('express').Router();
const user = require('../models/user');
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
        userProfile = await user.findOne({ _id: req.params.id });
        res.json(userProfile);
    } catch (err) { throw err }
})

router.post('/', jsonParser, async (req,res) => {
    try{
        let userCreate = new user(req.body);
        await userCreate.save();
        res.send('User added');
    }catch(err){
        throw err;
    }
});

module.exports = router;