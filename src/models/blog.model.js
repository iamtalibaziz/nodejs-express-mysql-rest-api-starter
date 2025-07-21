const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./user.model');

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: true
});

User.hasMany(Blog, { as: 'blogs', foreignKey: 'author' });
Blog.belongsTo(User, { as: 'authorDetails', foreignKey: 'author' });

module.exports = Blog;
