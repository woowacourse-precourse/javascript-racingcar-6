import { Random } from '@woowacourse/mission-utils';

class Car {
  MOVE_LIMIT = 4;

  constructor(name) {
    this.name = name;
    this.resultDash = '';
    this.goOrStop = false;
    // this.moveCount = 0;
  }

  checkMoveCondition() {
    this.goOrStop = Random.pickNumberInRange(0, 9) > this.MOVE_LIMIT ? true : false;
  }

  showMoveStatus() {
    const nameColon = this.name + ' : ';

    if (this.goOrStop) {
      this.resultDash += '-';
      // this.moveCount++;
    }

    return nameColon + this.resultDash;
  }

  getTotalMove() {
    return this.resultDash.length;
  }
}

export default Car;
