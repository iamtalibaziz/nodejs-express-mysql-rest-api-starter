const express = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const authorize = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const userValidator = require('../validators/user.validator');

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *       "403":
 *         description: Forbidden
 */
router.get('/', auth, authorize(['admin']), userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
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
router.get('/:id', auth, userController.getUser);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     tags: [Users]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       "200":
 *         description: OK
 *       "400":
 *         description: Bad request
 *       "404":
 *         description: Not found
 */
router.patch('/:id', auth, validate(userValidator.updateUser.body), userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
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
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not found
 */
router.delete('/:id', auth, authorize(['admin']), userController.deleteUser);

module.exports = router;
