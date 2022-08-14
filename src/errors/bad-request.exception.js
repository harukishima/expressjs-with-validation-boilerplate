class BadRequestException extends Error {
  constructor(message) {
    super(message || 'Bad Request');
    this.name = 'BadRequestException';
    this.code = 400;
  }
}

module.exports = BadRequestException;