import { Console, MissionUtils } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constants/gameMessage.js';
import ERROR_MESSAGE from './constant/errorMessage.js';

class App {
  async play() {}

  isValidNameFormat(names) {
    return names.every((name) => name.length <= 5);
  }

  includeSemiColon(input) {
    return input.includes(',');
  }

  toArray(input) {
    this.input = input;
    if (!this.includeSemiColon(input)) {
      throw new Error(ERROR_MESSAGE.DIVISION_BY_SEMICOLON);
    }
    const names = input.split(',').map((name) => name.trim());
    if (!this.isValidNameFormat(names)) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_FIVE);
    }
    return names;
  }

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_CAR_NAME,
    );
    const playerCarName = this.toArray(playerInput);
    return playerCarName;
  }
}

export default App;
