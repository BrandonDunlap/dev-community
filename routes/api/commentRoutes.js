const express = require('express');
const { commentController } = require('../../controllers');
const router = express.Router();
const authenticate = require('../../middlewares/authenticate');

router.post('/', authenticate, commentController.createComment);

module.exports = router;
