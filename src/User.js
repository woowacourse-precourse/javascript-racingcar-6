import { Console } from "@woowacourse/mission-utils";
import { USER_PROMPT, ERROR_MESSAGE } from "./utils/constants.js";
import {
  isCarNameLengthValid,
  isNumberOfCarsValid,
  areCarNamesUnique,
  isNaturalNumber,
} from "./utils/validation.js";

class User {
  #carNames = [];
  #attempts;

  async inputCarNamesAndAttempts() {
    await this.inputCarNames();
    await this.inputNumberOfAttempts();
  }

  async inputCarNames() {
    try {
      const input = await Console.readLineAsync(`${USER_PROMPT.CAR_NAME}\n`);
      const carNames = input.split(",");
      this.validateCars(carNames);

      this.#carNames = carNames;
    } catch (error) {
      throw error;
    }
  }

  async inputNumberOfAttempts() {
    try {
      const input = await Console.readLineAsync(`${USER_PROMPT.ATTEMPTS}\n`);
      this.validateAttempts(input);

      this.#attempts = input;
    } catch (error) {
      throw error;
    }
  }

  validateCars(carNames) {
    if (!isCarNameLengthValid(carNames)) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH_ERROR);
    }
    if (!isNumberOfCarsValid(carNames)) {
      throw new Error(ERROR_MESSAGE.MINIMUM_CARS_ERROR);
    }
    if (!areCarNamesUnique(carNames)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAMES_ERROR);
    }
  }

  validateAttempts(attempts) {
    if (!isNaturalNumber(attempts)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  getCarNames() {
    return this.#carNames;
  }

  getAttempts() {
    return this.#attempts;
  }
}

export default User;
