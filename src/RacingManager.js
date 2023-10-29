import Data from './Data.js';
import Input from './Input.js';

class RacingManager {
  constructor(input, data) {
    this.input = input;
    this.data = data;
  }

  validMovingCount () {
    const movingCount = this.data.randomNumberList(this.input.attemptsCount());

    return movingCount.filter((count) => count >= 4).length;
  }
}

export default RacingManager;

// 데이터 의존성 주입?