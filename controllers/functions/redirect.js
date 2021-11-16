
const redirect_home = (req, res, next) => {
    const userController = require('../../controllers/userController');
    var size = Object.keys(userController.usr).length;
    if(size && userController.usr.userbeforever == userController.usr.username){
        res.redirect('/blogs');
    }
    else{
        next();
    }
}

const redirect_login = (req, res, next) => {
    const userController = require('../../controllers/userController');
    var size = Object.keys(userController.usr).length;
    if( !size || userController.usr.userbeforever != userController.usr.username){
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