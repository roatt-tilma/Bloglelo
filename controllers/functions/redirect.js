const redirect_home = (req, res, next) => {
    if(req.session.username){
        res.redirect('/blogs');
    }
    else{
        next();
    }
}

const redirect_login = (req, res, next) => {
    if(!req.session.username){
        res.redirect('/login');
    }
    else{
        next();
    }
}

module.exports = {
    redirect_home,
    redirect_login
}