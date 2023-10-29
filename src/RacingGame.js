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

  getWinners() {
    if (this.#tryRound !== 0) {
      throw new Error(
        `[ERROR] 게임 round가 전부 실행되지 않았습니다. 잔여 라운드 : ${
          this.#tryRound
        }회`
      );
    }

    const finalRoundResult = this.getRoundResult();
    const maxMoveAmount = finalRoundResult.reduce(
      (maxMoveAmount, carResult) => {
        return (maxMoveAmount = Math.max(
          maxMoveAmount,
          carResult['position'].length
        ));
      },
      Number.MIN_SAFE_INTEGER
    );

    const winners = finalRoundResult
      .filter((car) => car.position.length === maxMoveAmount)
      .map((car) => car.name)
      .join(', ');

    return winners;
  }
}
