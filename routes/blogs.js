const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const blogs = [
        {
            title : "Title of Blog",
            createdAt : new Date(),
            author : "User currently logged in",
            description : "Described Content",
        }
    ]
    res.render('blogs/blogspage',{title : "BLOGS" , blogs : blogs});
})

router.get('/new',(req,res)=>{
    res.render('blogs/new',{title:"new blog"})
})

module.exports = router