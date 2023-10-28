export default class DefaultError extends Error {
  constructor(message) {
    super(message);
    this.message = `[ERROR] ${message}`;
    this.name = this.constructor.name;
  }
}
