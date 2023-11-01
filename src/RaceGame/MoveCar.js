import { Random } from '@woowacourse/mission-utils';
import { SYMBOL, MAGIC_NUMBER } from '../Constants/Constants.js';

class MoveCar {
  constructor(forwardStatus) {
    this.forwardStatus = forwardStatus;
  }

  /**
   * moveCar(): 자동차 이동을 보여 주는 메소드
   * carName: 경주에 참여한 각 자동차 이름
   */
  moveCar = (carName) => {
    if (!this.forwardStatus.has(carName)) {
      this.forwardStatus.set(carName, SYMBOL.hyphen);
      return;
    }

    this.forwardStatus.set(carName, this.forwardStatus.get(carName) + SYMBOL.hyphen);
  };

  /**
   * stopCar(): 자동차가 아직 전진하지 않은 상태를 보여 주는 메소드
   * carName: 경주에 참여한 각 자동차 이름
   */
  stopCar = (carName) => {
    if (this.forwardStatus.get(carName) === undefined) {
      this.forwardStatus.set(carName, SYMBOL.empty);
    }
  };

  /**
   * race(car): 자동차를 조건 판단에 따라 이동하거나 멈추게 하는 메소드
   * carName: 경주에 참여한 각 자동차 이름
   */
  race = (carName) => {
    const randomNumber = Random.pickNumberInRange(MAGIC_NUMBER.randomStart, MAGIC_NUMBER.randomEnd);

    if (randomNumber < MAGIC_NUMBER.moveNumber) this.stopCar(carName);
    if (randomNumber >= MAGIC_NUMBER.moveNumber) this.moveCar(carName);
  };
}

export default MoveCar;
