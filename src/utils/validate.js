const BadRequestException = require('../errors/bad-request.exception');

module.exports = (obj, schema) => {
  const result = schema.validate(obj);
  if (result.error) {
    const errMessage = result.error.details.map((item) => item.message);
    throw new BadRequestException(errMessage.join(', '));
  }
  return result.value;
};
