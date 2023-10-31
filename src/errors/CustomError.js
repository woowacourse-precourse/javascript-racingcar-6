class CustomError extends Error {
  static #ERROR_PREFIX = '[ERROR]';

  constructor(message) {
    super(`${CustomError.#ERROR_PREFIX} ${message}`);
  }
}

export default CustomError;
