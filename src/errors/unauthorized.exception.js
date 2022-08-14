class UnauthorizedException extends Error {
  constructor(message) {
    super(message || 'Unauthorized');
    this.name = 'UnauthorizedExeption';
    this.code = 401;
  }
}
