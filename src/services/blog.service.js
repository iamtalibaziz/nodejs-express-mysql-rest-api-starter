const blogHelper = require('../helpers/blog.helper');
const BlogResponse = require('../dto/blog.response');
const ApiError = require('../utils/ApiError');

const createBlog = async (blogData) => {
    const blog = await blogHelper.createBlog(blogData);
    return new BlogResponse(blog);
};

const getBlog = async (id) => {
    const blog = await blogHelper.findBlogById(id);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    return new BlogResponse(blog);
};

const getAllBlogs = async () => {
    const blogs = await blogHelper.findAllBlogs();
    return blogs.map(blog => new BlogResponse(blog));
};

const updateBlog = async (blogId, userId, updates) => {
    const blog = await blogHelper.findBlogById(blogId);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    if (blog.author !== userId) {
        throw new ApiError(403, 'You are not authorized to update this blog');
    }
    const updatedBlog = await blogHelper.updateBlog(blogId, updates);
    return new BlogResponse(updatedBlog);
};

const deleteBlog = async (blogId, userId) => {
    const blog = await blogHelper.findBlogById(blogId);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    if (blog.author !== userId) {
        throw new ApiError(403, 'You are not authorized to delete this blog');
    }
    const deletedBlog = await blogHelper.deleteBlog(blogId);
    return new BlogResponse(deletedBlog);
};

module.exports = {
    createBlog,
    getBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
};
