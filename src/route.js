const userRoute = require('./user/user.route');

module.exports = (app) => {
  app.use('/user', userRoute);
};
