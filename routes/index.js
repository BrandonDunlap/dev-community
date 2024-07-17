const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.use('/api/auth', require('./api/authRoutes'));

module.exports = router;
