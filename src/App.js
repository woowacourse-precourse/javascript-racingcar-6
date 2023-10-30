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
}

export default App;
