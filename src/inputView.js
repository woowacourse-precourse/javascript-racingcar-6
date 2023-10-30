import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constant/gameMessage.js';
import validation from './validation.js';

class Input {
  constructor() {
    this.names = [];
    this.times = 0;
  }

  saveCarNames(input) {
    this.input = input;
    validation.isValidNameFormat(input);
    const names = input.split(',').map((name) => name.trim());
    validation.isValidNamesArray(names);
    return names;
  }

  async inputCarNames() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_CAR_NAME,
    );
    const playerCarName = this.saveCarNames(playerInput);
    return playerCarName;
  }

  async inputNumberOfTimes() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_NUMBER_OF_TIMES,
    );
    const numberOfTimes = parseInt(playerInput, 10);
    validation.isValidNumberOfTimesFormat(numberOfTimes);
    return numberOfTimes;
  }
}
export default Input;
