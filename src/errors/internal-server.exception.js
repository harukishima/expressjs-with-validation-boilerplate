class InternalServerException extends Error {
  constructor(message) {
    super(message || 'Internal Server Error');
    this.name = 'InternalServerError';
    this.code = 500;
  }
}
