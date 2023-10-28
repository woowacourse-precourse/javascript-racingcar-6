import { ERROR_MESSAGE } from "../constants/Message"

export default class CarNameValidator {
  static namesvalidate(names) {
    if (this.isEmptyInput(names)) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
    if (this.hasWhiteSpace(names)) {
      throw new Error(ERROR_MESSAGE.hasWhiteSpace);
    }
    if (this.exceedNameLimit(names)) {
      throw new Error(ERROR_MESSAGE.exceedNameLimit);
    }
  }

  static isEmptyInput(input) {
    return !input || input.trim().length === 0;
  }
  static hasWhiteSpace(names) {
    return names.includes(' ');
  }
  static exceedNameLimit(names) {
    const nameArray = names.split(",");
    return nameArray.some(name => name.length > 5);
  }
}