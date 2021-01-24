const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleModel = new Schema({
    title: {
        type: String,
        minLength: 5,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    likes: [String],
    comments: {
        type: [String]
    },
    reads: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const articleModel = mongoose.model('Article', ArticleModel);
module.exports = articleModel;