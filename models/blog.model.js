const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    author : {
        type : String,
        // default : require('../controllers/userController').usr.username,
    }
})

module.exports = mongoose.model('Blog',blogSchema)