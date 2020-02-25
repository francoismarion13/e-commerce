const router = require('express').Router();
const Admin = require('../models/Admin');
const url = require('url');
const jsonParser = require('body-parser').json();

router.get('/', async (req,res) => {
    try{
        let admins;
        let query = {};
        if(Object.keys(req.query).length > 0){
            for(let i in req.query){
                newRegex = new RegExp('^' + req.query[i]);
                query[i] = { $regex: newRegex, $options:'i' };
            }
            admins = await user.find(query);
        }else{
            admins = await user.find();
        }
        res.status(200).json(admins);
    }catch(err){
        throw err;
    }
});

router.get('/:id', async (req, res) => {
    try {
        AdminProfile = await Admin.findOne({ _id: req.params.id });
        res.json(AdminProfile);
    } catch (err) { throw err }
})

router.post('/', jsonParser, async (req,res) => {
    try{
        let AdminCreate = new Admin(req.body);
        await AdminCreate.save();
        res.status(201).json(AdminCreate);
    }catch(err){
        throw err;
    }
});

router.post('/login', jsonParser, async (req,res) => {
    try{
        let AdminProfile = await Admin.findOne({ username: req.body.username, 
            password: req.body.password });
        res.status(200).json(AdminProfile);
    }catch(err){
        console.log("User not found")
        throw err;
    }
});



module.exports = router;