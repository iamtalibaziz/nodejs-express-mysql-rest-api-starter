const authService = require('../services/auth.service');
const sendResponse = require('../utils/apiResponse');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        return sendResponse(res, 201, true, { user });
    } catch (e) {
        logger.error('register: ', e);
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const login = async (req, res) => {
    try {
        const { user, token } = await authService.login(req.body.email, req.body.password);
        return sendResponse(res, 200, true, { user, token });
    } catch (e) {
        logger.error('login: ', e);
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

module.exports = {
    register,
    login
};
