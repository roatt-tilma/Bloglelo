const express = require('express')
const Blog = require('../models/blog.model')
let { redirect_home, redirect_login } = require('../controllers/functions/redirect');
const router = express.Router()

router.route('/').get(redirect_login ,async (req,res)=>{
    const blogs = await Blog.find().sort({ createdAt: 'desc'})
    res.render('blogs/blogspage',{title : "BLOGS" , blogs : blogs});
})

router.route('/new').get(redirect_login,(req,res)=>{
    res.render('blogs/new',{title:"new blog"})
})

router.route('/:id').get(redirect_login,async (req,res) => {
    const blog = await Blog.findById(req.params.id)
    if(blog==null) res.redirect('/')
    res.render('blogs/show',{title: "Single blog", blog : blog})
    // res.redirect('/blogs')
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