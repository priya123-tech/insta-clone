// server/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Route to fetch user profile information, including uploaded posts
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('username profilePicture');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const posts = await Post.find({ userId: user._id }).sort({ createdAt: -1 });
    res.json({ user, posts });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
});

module.exports = router;
