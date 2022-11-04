import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})
const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    comments:[commentSchema],
    title: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog