import { ERROR } from "../data/message.js";

class Validate {
  static isCheckCarName(input) {
    const splited = input.split(",");
    try {
      Validate.isCheckCarCount(splited);
      Validate.isCheckDuplicatedName(splited);
      Validate.isCheckProperLength(splited);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static isCheckNumber(input) {
    try {
      Validate.isCheckProperRange(input);
      Validate.isCheckProperForm(input);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static isCheckProperLength(splited) {
    splited.forEach((car) => {
      if (car.length > 5) {
        throw new Error(ERROR.LENGTH);
      }
    });
  }

  static isCheckCarCount(splited) {
    if (splited.length < 2) {
      throw new Error(ERROR.SPLIT);
    }
  }

  static isCheckDuplicatedName(splited) {
    if (new Set(splited).size !== splited.length) {
      throw new Error(ERROR.DUPLICATE);
    }
  }

  static isCheckProperRange(input) {
    if (Number(input) < 1 || Number(input) > 9) {
      throw new Error(ERROR.RANGE);
    }
  }

  static isCheckProperForm(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.NUMBER);
    }
  }
}

export default Validate;
