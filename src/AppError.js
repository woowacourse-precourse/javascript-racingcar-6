export default class AppError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}
