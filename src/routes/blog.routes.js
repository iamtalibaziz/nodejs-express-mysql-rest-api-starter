const express = require('express');
const blogController = require('../controllers/blog.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const blogValidator = require('../validators/blog.validator');

const router = new express.Router();

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *       "400":
 *         description: Bad request
 */
router.post('/', auth, validate(blogValidator.createBlog.body), blogController.createBlog);

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blogs]
 *     responses:
 *       "200":
 *         description: OK
 */
router.get('/', blogController.getAllBlogs);

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Get a blog post by ID
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *       "404":
 *         description: Not found
 */
router.get('/:id', blogController.getBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   patch:
 *     summary: Update a blog post by ID
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       "200":
 *         description: OK
 *       "400":
 *         description: Bad request
 *       "404":
 *         description: Not found
 */
router.patch('/:id', auth, validate(blogValidator.updateBlog.body), blogController.updateBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete a blog post by ID
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *       "404":
 *         description: Not found
 */
router.delete('/:id', auth, blogController.deleteBlog);

module.exports = router;
