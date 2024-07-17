const { Comment } = require('../models');

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      userId: req.user.id,
      blogId: req.body.blogId,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
};
