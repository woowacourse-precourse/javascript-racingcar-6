import { ERROR_MESSAGE } from "../utils/constants.js";

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.HEADER} ${message}`);

    this.name = "Error";
  }
}

export default CustomError;