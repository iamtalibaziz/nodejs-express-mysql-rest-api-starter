const User = require('../models/user.model');

const createUser = async (userData) => {
    return await User.create(userData);
};

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

const findUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser = async (id, updates) => {
    const user = await User.findByPk(id);
    if (user) {
        return await user.update(updates);
    }
    return null;
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (user) {
        await user.destroy();
        return user;
    }
    return null;
};

const findAllUsers = async () => {
    return await User.findAll();
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUser,
    deleteUser,
    findAllUsers
};
