import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class RacingCarGame {
  async startGame() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const carNameList = carNames.split(',');
  }
}

export default RacingCarGame;
