const mongoose = require('mongoose')

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

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
        default : localStorage.getItem('username')
    }
})

module.exports = mongoose.model('Blog',blogSchema)