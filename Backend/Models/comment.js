const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    CommentId: Number,
    ReviewId: Number,
    UserId: Number,
    CommentText: String,
    CommentDate: Date
})

const comment = mongoose.model('comment', commentSchema)
module.exports = comment;