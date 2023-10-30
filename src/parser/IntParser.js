import { ERROR_MESSAGE } from "../constants/messages.js";
import { typeValidator } from "../utils/validators.js";

class IntParser {
  static parse(value) {
    IntParser.#validateBeforeParsing(value);
    const parsed = parseInt(value, 10);
    IntParser.#validateAfterParsing(parsed);
    return parsed;
  }

  static #validateBeforeParsing(value) {
    if (/[^0-9]/.test(value)) {
      throw new Error(ERROR_MESSAGE.includeString);
    }
  }

  static #validateAfterParsing(value) {
    typeValidator.isNumber(value);
  }
}

export default IntParser;
