import ErrorMessage from '../constants/ErrorMessage.js';

class InputManager {
  static getCarNames(input) {
    return input.split(',');
  }

  static validateCarName(cars) {
    InputManager.#validateNotMoreThanFiveChar(cars);
    return cars;
  }

  static #validateNotMoreThanFiveChar(cars) {
    if (cars.find((car) => car.length > 5) !== undefined) {
      throw Error(ErrorMessage.INCLUDE_MORE_THAN_FIVE_CHAR);
    }

    return cars;
  }
}

export default InputManager;
