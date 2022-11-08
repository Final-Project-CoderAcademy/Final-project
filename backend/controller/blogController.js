import Blog from '../models/blogModel.js'
// asyncHandler is used to simplify the syntax of the promise catch error handling
import asyncHandler from 'express-async-handler'

// GET all the blogs
export const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({})
    if (blogs && blogs.length !== 0) {
        res.status(200).json(blogs)
    } else {
        res.status(404)
        throw new Error("No blogs found.")
    }
})

// get one blog by Id
export const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if (blog) {
        res.status(200)
        res.json(blog)
    } else {
        res.status(404)
        throw new Error("No blog found.")
    }
})

// POST one blog
export const createBlog = asyncHandler(async (req, res) => {
    const blog = new Blog({
        user: req.user._id,
        image: req.body.image,
        article: req.body.article,
        title: req.body.title
    })
    const newBlog = await blog.save()
    res.status(201).json(newBlog)
})

// GET one user's blogs by userId
export const getBlogsByUserId = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({user: req.params.userId})
    if (blogs && blogs.length !==0) {
        res.status(200)
        res.json(blogs)
    } else {
        res.status(404)
        throw new Error("No blogs found.")
    }
})

// DELETE one blog by userId
export const deleteBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    // console.log(blog.user)
    // console.log(req.user._id)
    if (blog) {
        if (req.user._id.toString() === blog.user.toString()|| req.user.isAdmin){
            await blog.remove()
            res.status(200)
            res.json({message: 'Blog removed successfully!'})
        } else {
            res.status(401)
            throw new Error('You are not authorized to delete this blog!')
        }
    } else {
        res.status(404)
        throw new Error('not found this blog!')
    }
})