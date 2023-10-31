class AppError extends Error {
  constructor(message) {
    this.name = this.constructor.name;
  }
}

export default AppError;
