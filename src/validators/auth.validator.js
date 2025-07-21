const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      'string.empty': 'Name is not allowed to be empty',
      'any.required': 'Name is required',
    }),
    email: Joi.string().required().email().messages({
      'string.empty': 'Email is not allowed to be empty',
      'string.email': 'Email must be a valid email',
      'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Password is not allowed to be empty',
      'any.required': 'Password is required',
    }),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
};
