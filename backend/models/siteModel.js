import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})

const siteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: [reviewSchema],
    numReviews: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

const Site = mongoose.model('Site', siteSchema)

export default Site