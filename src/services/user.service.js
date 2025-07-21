const userHelper = require('../helpers/user.helper');
const UserResponse = require('../dto/user.response');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

const getUser = async (id) => {
    const user = await userHelper.findUserById(id);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    return new UserResponse(user);
};

const updateUser = async (userIdToUpdate, currentUser, updates) => {
    logger.info(`Attempting to update user ${userIdToUpdate} by user ${currentUser.id}`);
    if (parseInt(userIdToUpdate, 10) !== currentUser.id && currentUser.role !== 'admin') {
        throw new ApiError(403, 'You are not authorized to update this user');
    }
    const user = await userHelper.updateUser(userIdToUpdate, updates);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    logger.info(`Successfully updated user ${userIdToUpdate}`);
    return new UserResponse(user);
};

const deleteUser = async (id) => {
    const user = await userHelper.deleteUser(id);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    return new UserResponse(user);
};

const getAllUsers = async () => {
    const users = await userHelper.findAllUsers();
    return users.map(user => new UserResponse(user));
};

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
};
