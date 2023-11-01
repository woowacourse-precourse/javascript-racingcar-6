import { MESSAGES } from "../../constants/messages";

export class CustomError extends Error {
  static #prefix = MESSAGES.ERROR.PREFIX;

  constructor(errorMessage) {
    super(`${CustomError.#prefix} ${errorMessage}`);
  }
}
