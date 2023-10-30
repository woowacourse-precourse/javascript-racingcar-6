import { Console, MissionUtils } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constants/gameMessage.js';

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
      throw new Error('[ERROR] 이름은 쉼표로 구분되어야 합니다.');
    }
    const names = input.split(',').map((name) => name.trim());
    if (!this.isValidNameFormat(names)) {
      throw new Error('[ERROR] 이름은 5자를 넘을 수 없습니다.');
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
