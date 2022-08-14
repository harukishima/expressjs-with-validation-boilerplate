const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
  logger.error(`${err.name}: ${err.message}`);
  if (!err.code) {
    if (err.name === 'SyntaxError') {
      return res.status(400).json({ status: 400, message: 'Bad Request'});
    }
    return res
      .status(500)
      .json({ status: 500, message: 'Internal server error' });
  }
  res.status(err.code).json({ status: err.code, message: err.message});
};
