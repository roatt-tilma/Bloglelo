let User = require('../models/user.model');

const add_user = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confpassword = req.body.confpassword;


    User.find({ email: email }, (err, data) => {
        if(err){
            res.status(400).json('Error: ' + err);
        }
        else{
            if(data.length === 0){
                User.find({ username: username }, (err, data) => {
                    if(err){
                        res.status(400).json('Error: ' + err);
                    }
                    else{
                        if(data.length === 0){
                            if (password === confpassword){
                                const newUser = new User({
                                    email: email,
                                    username: username,
                                    password: password
                                });
                                newUser.save()
                                .then(() => {
                                    res.redirect('/');
                                })
                                .catch(err => res.status(400).json('Error: ' + err));
                            }
                            else{
                                console.log('Please enter same password to confirm');
                                res.json('Error: Please enter same password to confirm');
                            }
                        }
                        else{
                            console.log('Given username is already in use');
                            res.json('Error: Given username is already in use');
                        }
                    }
                })
            }
            else{
                console.log('Given email is already in use');
                res.json('Error: Given email is already in use');
            }
        }
    })

}

module.exports = {
    add_user,
}