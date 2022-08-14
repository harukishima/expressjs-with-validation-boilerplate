const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().min(6).max(30).required(),
  name: Joi.string().required(),
}).options({ stripUnknown: true });

module.exports = schema;
