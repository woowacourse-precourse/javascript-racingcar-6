import ConsoleInput from './io/ConsoleInput.js';
import MESSAGE from './constants/Message.js';
import InputManager from './utils/InputManager.js';

class RacingGame {
  static start() {
    return null;
  }

  static async inputRacingCarNames() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_RACING_CAR_NAMES);
    const cars = InputManager.getCarNames(input);
    InputManager.validateCarName(cars);

    return cars;
  }
}

export default RacingGame;
