const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Comment', commentSchema);
