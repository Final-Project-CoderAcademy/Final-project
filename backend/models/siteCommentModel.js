import mongoose from 'mongoose';

const siteCommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    site: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Site'
    },
    content: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

const SiteComment = mongoose.model('SiteComment', siteCommentSchema)

export default SiteComment