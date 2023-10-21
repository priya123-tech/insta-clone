// server/routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Route to fetch all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Retrieve posts, sorted by most recent
    res.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;
