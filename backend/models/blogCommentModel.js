import mongoose from 'mongoose';

const blogCommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
    content: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

const BlogComment = mongoose.model('BlogComment', blogCommentSchema)

export default BlogComment