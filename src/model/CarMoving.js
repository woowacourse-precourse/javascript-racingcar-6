import { Random } from '@woowacourse/mission-utils';

class CarMoving {
  async playEachRound(carCount) {
    this.racingCount = new Array(carCount);
    for (let i = 0; i < carCount; i++) {
      this.racingCount[i] = await this.generateRandomNumber();
    }
    return this.countWinnerIndex();
  }

  async generateRandomNumber() {
    return this.checkRandomNumber(await Random.pickNumberInRange(0, 9));
  }

  checkRandomNumber(randomRacingNumber) {
    if (randomRacingNumber >= 4) {
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
