class ForbiddenException extends Error {
  constructor(message) {
    super(message || 'Forbidden');
    this.name = 'ForbiddenException';
    this.code = 403;
  }
}
