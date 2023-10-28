import ConsoleInput from './io/ConsoleInput.js';
import MESSAGE from './constants/Message.js';
import InputManager from './utils/InputManager.js';
import ConsoleOutput from './io/ConsoleOutput.js';

class RacingGame {
  static start() {
    return null;
  }

  static async inputRacingCarNames() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_RACING_CAR_NAMES);
    const cars = InputManager.getCarNames(input);
    ConsoleOutput.output(cars);
  }
}

export default RacingGame;
