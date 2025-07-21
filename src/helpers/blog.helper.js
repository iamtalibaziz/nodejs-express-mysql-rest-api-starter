const Blog = require('../models/blog.model');
const User = require('../models/user.model');

const createBlog = async (blogData) => {
    return await Blog.create(blogData);
};

const findBlogById = async (id) => {
    return await Blog.findByPk(id, {
        include: {
            model: User,
            as: 'authorDetails',
            attributes: ['id', 'name', 'email']
        }
    });
};

const findAllBlogs = async () => {
    return await Blog.findAll({
        include: {
            model: User,
            as: 'authorDetails',
            attributes: ['id', 'name', 'email']
        }
    });
};

const updateBlog = async (id, updates) => {
    const blog = await Blog.findByPk(id);
    if (blog) {
        return await blog.update(updates);
    }
    return null;
};

const deleteBlog = async (id) => {
    const blog = await Blog.findByPk(id);
    if (blog) {
        await blog.destroy();
        return blog;
    }
    return null;
};

module.exports = {
    createBlog,
    findBlogById,
    findAllBlogs,
    updateBlog,
    deleteBlog
};
