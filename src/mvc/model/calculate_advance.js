import { Random } from '@woowacourse/mission-utils';

class CalculateAdvance {
  constructor(RACING_CAR, RACING_CNT) {
    this.RACING_CAR = RACING_CAR;
    this.RACING_CNT = RACING_CNT;
    this.GAME_RESULT = {};
  }

  addInitialResult() {
    this.RACING_CAR
      .forEach((carName) => { this.GAME_RESULT[carName] = [0]; });
  }

  deleteInitialResult(cnt) {
    if (cnt === 0) {
      this.RACING_CAR
        .forEach((carName) => { this.GAME_RESULT[carName].shift(); });
    }
  }

  createRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  isAdvance(randomNum) {
    if (randomNum >= 4) {
      return true;
    }
    return false;
  }

  calculateAdvance() {
    this.RACING_CAR
      .forEach((carName) => {
        const prevAdvance = this.GAME_RESULT[carName].at(-1);
        const RANDOM_NUM = this.createRandomNum();
        if (this.isAdvance(RANDOM_NUM)) {
          return this.GAME_RESULT[carName].push(prevAdvance + 1);
        }
        return this.GAME_RESULT[carName].push(prevAdvance);
      });
  }

  gameResult() {
    this.addInitialResult();
    for (let cnt = 0; cnt < Number(this.RACING_CNT); cnt += 1) {
      this.calculateAdvance();
      this.deleteInitialResult(cnt);
    }
    return this.GAME_RESULT;
  }
}

export default CalculateAdvance;
