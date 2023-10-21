const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageUrl: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Post', postSchema);
