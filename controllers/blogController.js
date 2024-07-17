const { Blog } = require('../models');

exports.createBlog = async (req, res) => {
  try {
    console.log('Request to create a blog received:', req.body);
    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id,
    });
    console.log('Blog created successfully:', newBlog);
    res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};
