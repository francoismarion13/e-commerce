const router = require('express').Router();
const user = require('../models/user');
const url = require('url');
const jsonParser = require('body-parser').json();

router.get('/:id', async (req, res) => {
    try {
        userProfile = await user.findOne({ _id: req.params.id });
        res.json(userProfile);
    } catch (err) { throw err }
})

module.exports = router;