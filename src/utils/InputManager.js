import {
  MIN_GAME_ATTEMPT_NUMBER,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
} from '../constants/Enum.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import MESSAGE from '../constants/Message.js';
import ConsoleInput from '../io/ConsoleInput.js';

class InputManager {
  static getCarNames(input) {
    return input.split(',');
  }

  static async inputRacingCarNames() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_RACING_CAR_NAMES);
    const cars = InputManager.getCarNames(input);

    InputManager.validateCarName(cars);

    return cars;
  }

  static async inputGameAttemptNumber() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_GAME_ATTEMPT_NUMBER);

    InputManager.validateGameAttemptNumber(input);

    return input;
  }

  static validateCarName(cars) {
    InputManager.#validateNotMoreThanFiveChar(cars);
    InputManager.#validateNotLessThanOneChar(cars);
    InputManager.#validateNotIncludeDuplicateNames(cars);

    return cars;
  }

  static validateGameAttemptNumber(attemptNumber) {
    InputManager.#validateIsNumber(attemptNumber);
    InputManager.#validateNaturalNumber(attemptNumber);

    return attemptNumber;
  }

  static #validateNotMoreThanFiveChar(cars) {
    if (cars.find((car) => car.length > NAME_MAX_LENGTH) !== undefined) {
      throw Error(ERROR_MESSAGE.INCLUDE_MORE_THAN_FIVE_CHAR);
    }
  }

  static #validateNotLessThanOneChar(cars) {
    if (cars.find((car) => car.length < NAME_MIN_LENGTH) !== undefined) {
      throw Error(ERROR_MESSAGE.INCLUDE_LESS_THEN_ONE_CHAR);
    }
  }

  static #validateNotIncludeDuplicateNames(cars) {
    if (cars.some((car) => this.#checkDuplicateInArray(cars, car))) {
      throw Error(ERROR_MESSAGE.INCLUDE_DUPLICATE_NAMES);
    }
  }

  static #checkDuplicateInArray(cars, car) {
    return cars.indexOf(car) !== cars.lastIndexOf(car);
  }

  static #validateIsNumber(attemptNumber) {
    const attemptNumberToNumberType = Number(attemptNumber);

    if (Number.isNaN(attemptNumberToNumberType)) {
      throw Error(ERROR_MESSAGE.INPUT_NOT_NUMBER);
    }
  }

  static #validateNaturalNumber(attemptNumber) {
    if (Number(attemptNumber) < MIN_GAME_ATTEMPT_NUMBER) {
      throw Error(ERROR_MESSAGE.INPUT_NOT_NATURAL_NUMBER);
    }
  }
}

export default InputManager;
