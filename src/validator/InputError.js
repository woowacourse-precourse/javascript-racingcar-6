import { ERROR_PREFIX } from "../constants/error-message.js";

export default class InputError extends Error {
  constructor(message) {
    super(ERROR_PREFIX + message);
  }
}
