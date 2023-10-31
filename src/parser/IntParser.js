import { ERROR_MESSAGE } from "../constants/messages.js";
import { typeValidator } from "../utils/validators.js";

class IntParser {
  static parse(value) {
    IntParser.#validateOnlyInt(value);
    const parsed = parseInt(value, 10);
    IntParser.#validateIsNumber(parsed);
    return parsed;
  }

  static #validateOnlyInt(value) {
    if (/[^0-9]/.test(value)) {
      throw new Error(ERROR_MESSAGE.includeNotInt);
    }
  }

  static #validateIsNumber(value) {
    typeValidator.isNumber(value);
  }
}

export default IntParser;
