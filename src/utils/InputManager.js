import ErrorMessage from '../constants/ErrorMessage.js';
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
