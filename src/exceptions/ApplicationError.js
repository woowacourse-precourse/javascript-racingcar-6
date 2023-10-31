class ApplicationError extends Error {
  static #prefix = '[ERROR]';

  constructor(message) {
    super(`${ApplicationError.#prefix} ${message}`);
  }
}

export default ApplicationError;
