const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const { Blog } = require('../models');

router.get('/dashboard', authenticate, async (req, res) => {
  try {
    const userBlogs = await Blog.findAll({
      where: { userId: req.userId },
    });
    res.render('dashboard', { blogs: userBlogs });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.status(500).json({ message: 'Something broke' });
  }
});

module.exports = router;
