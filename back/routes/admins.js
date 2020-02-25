const router = require('express').Router();
const admin = require('../models/admin');
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
            admins = await admin.find(query);
        }else{
            admins = await admin.find();
            console.log(admins);
        }
        res.status(200).json(admins);
    }catch(err){
        throw err;
    }
});

router.get('/:id', async (req, res) => {
    try {
        AdminProfile = await admin.findOne({ _id: req.params.id });
        res.json(AdminProfile);
    } catch (err) { throw err }
})

router.post('/', jsonParser, async (req,res) => {
    try{
        let AdminCreate = new admin(req.body);
        await AdminCreate.save();
        res.status(201).json(AdminCreate);
    }catch(err){
        throw err;
    }
});

router.post('/login', jsonParser, async (req,res) => {
    try{
        let AdminProfile = await admin.findOne({ username: req.body.username, 
            password: req.body.password });
        res.status(200).json(AdminProfile);
    }catch(err){
        console.log("Admin not found")
        throw err;
    }
});



module.exports = router;