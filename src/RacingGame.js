import { Random } from '@woowacourse/mission-utils';

export default class RacingGame {
  #carList;
  #tryRound;

  constructor(carList, tryRound) {
    this.#carList = carList;
    this.#tryRound = tryRound;
  }

  createRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isFinish() {
    return this.#tryRound === 0;
  }

  clearRound() {
    this.#tryRound -= 1;
  }

  isMovalbe(number) {
    return number >= 4;
  }

  roundStart() {
    this.#carList.forEach((car) => {
      const carPickNumber = this.createRandomNumber();
      const isMovable = this.isMovalbe(carPickNumber);

      if (isMovable) {
        car.increasePosition();
      }
    });
    this.clearRound();
  }

  getRoundResult() {
    return this.#carList.map((car) => car.getPositionResult());
  }
}
