class NotFoundException extends Error {
  constructor(message) {
    super(message || 'Not Found');
    this.name = 'NotFoundException';
    this.code = 404;
  }
}

module.exports = NotFoundException;
