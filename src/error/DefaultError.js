export default class DefaultError extends Error {
  static ERROR_PREFIX = '[ERROR]';

  constructor(message) {
    super(message);
    this.message = `${DefaultError.ERROR_PREFIX} ${message}`;
    this.name = this.constructor.name;
  }
}
