const express = require('express')
const Blog = require('../models/blog.model')
const router = express.Router()

router.get('/',async (req,res)=>{
    const blogs = await Blog.find().sort({ createdAt: 'desc'})
    res.render('blogs/blogspage',{title : "BLOGS" , blogs : blogs});
})

router.get('/new',(req,res)=>{
    res.render('blogs/new',{title:"new blog"})
})

router.get('/:id',async (req,res) => {
    const blog = await Blog.findById(req.params.id)
    if(blog==null) res.redirect('/')
    res.redirect('/blogs')
})

router.post('/',async (req,res) => {
    const blog = new Blog({
        title : req.body.title,
        description : req.body.description,
    })

    try{
        await blog.save()
        res.redirect(`/blogs/${blog.id}`)
    }
    catch(e){
        res.render('blogs/new');
    }
   
})

module.exports = router