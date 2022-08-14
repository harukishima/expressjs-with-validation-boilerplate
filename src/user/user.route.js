const route = require('express').Router();
const validateMiddleware = require('../middlewares/validate.middleware');
const userController = require('./user.controller');
const createUserSchema = require('./schemas/create-user.schema');

route.post(
  '/',
  validateMiddleware(createUserSchema),
  userController.createUser
);

module.exports = route;
