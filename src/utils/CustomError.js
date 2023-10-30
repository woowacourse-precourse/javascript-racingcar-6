const formatErrorMessage = (message) => `[ERROR] ${message}`;

export class CustomError extends Error {
  constructor(message) {
    super(formatErrorMessage(message));
  }
}
