const router = require('express').Router();
const userController = require('../controllers/userController');
let { redirect_home, redirect_login } = require('../controllers/functions/redirect');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(userController.add_user);

router.route('/login').get(redirect_home, (req, res) => {
    res.render('login', { title: 'LOGIN' });
});

router.route('/login').post(userController.login_user);

router.route('/logout').get(userController.logout_user);

router.use((req, res) => {
    res.send("404 not found ");
})

module.exports = router;