const redirect_home = (req, res) => {
    if(req.session.username){
        res.redirect('/home')
    }
    else{
        res.redirect('/login');
    }
}

const redirect_login = (req, res) => {

}

module.exports = {
    redirect_home,
    redirect_login
}