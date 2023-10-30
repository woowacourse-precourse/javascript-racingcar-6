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

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_CAR_NAME,
    );
    const playerCarName = playerInput.split(',').map((name) => name.trim());
    return playerCarName;
  }
}

export default App;
