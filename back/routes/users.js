const router = require('express').Router();
const User = require('../models/user');
const url = require('url');
const jsonParser = require('body-parser').json();

router.get('/', async (req, res) => {
    try {
        let users;
        let query = {};
        if (Object.keys(req.query).length > 0) {
            for (let i in req.query) {
                newRegex = new RegExp('^' + req.query[i]);
                query[i] = { $regex: newRegex, $options: 'i' };
            }
            users = await user.find(query);
        } else {
            users = await user.find();
        }
        res.status(200).json(users);
    } catch (err) {
        throw err;
    }
});

router.get('/:id', async (req, res) => {
    try {
        userProfile = await User.findOne({ _id: req.params.id });
        res.json(userProfile);
    } catch (err) { throw err }
})

router.post('/', jsonParser, async (req, res) => {
    try {
        let userCreate = new User(req.body);
        await userCreate.save();
        res.status(201).json(userCreate);
    } catch (err) {
        throw err;
    }
});

router.post('/login', jsonParser, async (req, res) => {
    try {
        let userProfile = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json(userProfile);
    } catch (err) {
        console.log("User not found")
        throw err;
    }
});

router.put('/:id', jsonParser, async (req, res) => {
    try {
        let userUpdated = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(202).send(userUpdated);
        console.log(userUpdated)
    } catch (err) {
        throw err;
    }
});

// router.put('/:id', jsonParser, async (req,res) => {
//     try{
//         // req.params.cards.foreach(async e => {
//         //     await User.findOneAndUpdate({ _id: req.params._id }, { $pull: { cards: { 
//         //         _id: req.body._id } } }, { new: true });
//         // })
//         // req.params.cards.foreach(async e => {
//         //     await User.findOneAndUpdate({ _id: req.params._id }, { $pull: { adresses: { 
//         //         _id: req.body._id } } }, { new: true });
//         // })
//         let userUpdated = await User.updateOne({ _id: req.params._id }, {
//             $set: {
//                 gender: req.body.gender,
//                 lastname: req.body.lastname,
//                 firstname: req.body.firstname,
//                 dateOfBirth: req.body.dateOfBirth,
//                 username: req.body.username,
//                 password: req.body.password,
//                 email: req.body.email,
//                 phone: req.body.phone
//             }
//         });
//         res.status(202).send('User updated :\n' + userUpdated);
//     }catch(err){
//         throw err;
//     }
// });
module.exports = router;