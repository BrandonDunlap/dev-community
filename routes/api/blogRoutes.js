const express = require('express');
const router = express.Router();
const { Blog } = require('../../models');
const authenticate = require('../../middlewares/authenticate');

router.post('/', authenticate, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id,
    });
    res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error creating blog post:', err);  // Added error logging
    res.status(500).json({ message: 'Failed to create blog post', error: err.message });
  }
});

module.exports = router;
