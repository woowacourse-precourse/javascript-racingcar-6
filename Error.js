class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.message = `[ERROR] : ${message}`;
  }
}

export default ValidationError;
