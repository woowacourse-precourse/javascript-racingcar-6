import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/messages';

const DECISION_NUM = 4;
const FORWARD_MARKER = '-';

class Test {
  _moveCounts;

  constructor(carNameArr) {
    this._moveCounts = Array(carNameArr.length).fill(0);
  }

  get moveCounts() {
    return this._moveCounts;
  }

  async testing(carNameArr) {
    for (let i = 0; i < carNameArr.length; i++) {
      if (Random.pickNumberInRange(0, 9) >= DECISION_NUM) this._moveCounts[i] += 1;
    }
    for (let i = 0; i < carNameArr.length; i++) {
      Console.print(`${carNameArr[i]} : ${FORWARD_MARKER.repeat(this._moveCounts[i])}`);
    }
    Console.print(GAME_MESSAGE.lineBreak);
  }

}

export default Test;