const router = require('express').Router();
const userController = require('../controllers/userController');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').get(userController.add_user);


module.exports = router;