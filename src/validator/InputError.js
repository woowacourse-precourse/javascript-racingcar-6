import { ERROR_PREFIX } from "../constants/error-message.js";

export default class InputError extends Error {
  constructor(message) {
    // ERROR_PREFIX("[ERROR] ") 붙인 후 에러 메시지를 던진다.
    super(ERROR_PREFIX + message);
  }
}
