class ConflictException extends Error {
  constructor(message) {
    super(message || 'Conflict');
    this.name = 'ConflictException';
    this.code = 409;
  }
}
