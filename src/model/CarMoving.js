import { Random } from '@woowacourse/mission-utils';
import { RANGE_NUMBER } from '../util/constants.js';

class CarMoving {
  async playEachRound(carCount) {
    this.racingCount = new Array(carCount);
    for (let i = 0; i < carCount; i++) {
      this.racingCount[i] = await this.generateRandomNumber();
    }
    return this.countWinnerIndex();
  }

  async generateRandomNumber() {
    return this.checkRandomNumber(
      await Random.pickNumberInRange(RANGE_NUMBER.randomMinNumber, RANGE_NUMBER.randomMaxNumber),
    );
  }

  checkRandomNumber(randomRacingNumber) {
    if (randomRacingNumber >= RANGE_NUMBER.movableNumber) {
      return randomRacingNumber;
    }
    return 0;
  }

  countWinnerIndex() {
    let winnerIndex = [];
    let maxValue = Math.max(...this.racingCount);
    let maxValueIndex = this.racingCount.indexOf(maxValue);

    while (maxValueIndex !== -1) {
      winnerIndex.push(maxValueIndex);
      maxValueIndex = this.racingCount.indexOf(maxValue, maxValueIndex + 1);
    }
    return winnerIndex;
  }
}

export default CarMoving;
