const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, { foreignKey: 'userId', onDelete: 'CASCADE' });
Blog.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Blog.hasMany(Comment, { foreignKey: 'blogId', onDelete: 'CASCADE' });
Comment.belongsTo(Blog, { foreignKey: 'blogId' });

module.exports = { User, Blog, Comment, sequelize };
