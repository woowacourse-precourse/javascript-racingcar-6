import { MissionUtils } from '@woowacourse/mission-utils';

class CarModel {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  getCarModel() {
    return { name: this.name, position: this.position };
  }

  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);

    return randNum >= 4 && this.position++;
  }

  isWinner(winnerPos) {
    return this.position === winnerPos;
  }
}

export default CarModel;
