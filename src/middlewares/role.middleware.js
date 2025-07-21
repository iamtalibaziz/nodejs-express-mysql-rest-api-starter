const sendResponse = require('../utils/apiResponse');
const ApiError = require('../utils/ApiError');

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      const error = new ApiError(403, 'Forbidden');
      return sendResponse(res, error.statusCode, false, null, error.messages);
    }
    next();
  };
};

module.exports = authorize;
