import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constant/gameMessage.js';
import validation from './validation.js';

class Input {
  constructor() {
    this.names = [];
    this.times = 0;
  }

  isValidNameFormat(names) {
    return names.every((name) => name.length <= 5);
  }

  includeSemiColon(input) {
    return input.includes(',');
  }

  saveCarNames(input) {
    this.input = input;
    validation.isValidNameFormat(input);
    const names = input.split(',').map((name) => name.trim());
    validation.isValidNamesArray(names);
    // if (!this.includeSemiColon(input)) {
    //   throw new Error(ERROR_MESSAGE.DIVISION_BY_SEMICOLON);
    // }
    // const names = input.split(',').map((name) => name.trim());
    // if (!this.isValidNameFormat(names)) {
    //   throw new Error(ERROR_MESSAGE.LESS_THAN_FIVE);
    // }
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
