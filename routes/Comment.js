// server/routes/comments.js

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Route to fetch comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// Route to add a new comment to a post
router.post('/:postId', async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).json({ error: 'Comment text is required.' });
    }

    const newComment = new Comment({
      text: req.body.text,
      postId: req.params.postId,
      // You may want to associate the comment with the logged-in user here
    });

    await newComment.save();
    res.status(201).json({ success: 'Comment added successfully' });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

module.exports = router;
