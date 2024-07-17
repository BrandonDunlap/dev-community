// controllers/dashboardController.js
const { Blog } = require('../models');

exports.getDashboard = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ where: { userId: req.user.id } });
    res.render('dashboard', { blogs });
  } catch (err) {
    console.error('Error fetching dashboard:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
