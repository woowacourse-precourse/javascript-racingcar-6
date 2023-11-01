class AppError extends Error {
  static PREFIX = '[ERROR]';

  constructor(message) {
    super(`${AppError.PREFIX} : ${message}`);
  }
}

export default AppError;
