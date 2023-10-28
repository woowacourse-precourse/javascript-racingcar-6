import { typeValidator } from "../utils/validators.js";

class IntParser {
  static parse(value) {
    const parsed = parseInt(value, 10);
    IntParser.#validate(parsed);
    return parsed;
  }

  static #validate(value) {
    typeValidator.isNumber(value);
  }
}

export default IntParser;
