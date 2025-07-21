const Joi = require('joi');

const updateUser = {
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
  }),
};

module.exports = {
  updateUser,
};
