var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const redirect_home = (req, res, next) => {
    if(localStorage.getItem('username')){
        res.redirect('/blogs');
    }
    else{
        next();
    }
}

const redirect_login = (req, res, next) => {
    if(!localStorage.getItem('username')){
        res.redirect('/users/login');
    }
    else{
        next();
    }
}

module.exports = {
    redirect_home,
    redirect_login
}