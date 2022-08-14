const validate = require('../utils/validate');

module.exports = (schema, paramType = 'body') => {
  return (req, res, next) => {
    if (!schema) next();
    const validated = validate(req.body, schema);
    switch (paramType) {
      case 'body':
        req.body = validated;
        break;
      case 'query':
        req.query = validated;
        break;
      default:
    }
    next();
  };
};
