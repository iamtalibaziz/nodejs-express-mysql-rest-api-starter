const User = require('../models/user.model');
const Blog = require('../models/blog.model');
const logger = require('../config/logger');

const seedDefaultData = async () => {
  try {
    const userCount = await User.count();
    if (userCount === 0) {
      const defaultUser = {
        name: 'Default User',
        email: 'default@example.com',
        password: 'password123',
        role: 'user'
      };
      const adminUser = {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin'
      };
      const user = await User.create(defaultUser);
      await User.create(adminUser);
      logger.info('Default user and admin created');

      const blogCount = await Blog.count();
      if (blogCount === 0) {
        const defaultBlogs = [
          {
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
            author: user.id,
          },
          {
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
            author: user.id,
          },
        ];
        await Blog.bulkCreate(defaultBlogs);
        logger.info('Default blogs created');
      }
    }
  } catch (error) {
    logger.error('seedDefaultData: ', error);
  }
};

module.exports = seedDefaultData;
