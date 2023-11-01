import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_RANGE } from './constants/numberRange.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';
import { paramType } from './utils/paramType.js';
import Car from './Car.js';
import Refree from './Refree.js';

export default class RacingGame {
  #carList;
  #refree;

  constructor(
    carList,
    refree,
    _0 = paramType(carList, Array),
    _1 = paramType(refree, Refree)
  ) {
    this.#carList = carList;
    this.#refree = refree;
  }

  createRandomNumber(
    min = RANDOM_NUMBER_RANGE.MIN,
    max = RANDOM_NUMBER_RANGE.MAX,
    _0 = paramType(min, 'number'),
    _1 = paramType(max, 'number')
  ) {
    return Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE.MIN,
      RANDOM_NUMBER_RANGE.MAX
    );
  }

  isFinish() {
    return this.#refree.isGameFinish();
  }

  _moveCar(car, _ = paramType(car, Car)) {
    const randomNumber = this.createRandomNumber(
      RANDOM_NUMBER_RANGE.MIN,
      RANDOM_NUMBER_RANGE.MAX
    );

    if (this.#refree.isMovalbe(randomNumber)) car.increasePosition();
  }

  _moveCars() {
    this.#carList.forEach((car) => {
      this._moveCar(car);
    });
  }

  roundStart() {
    if (this.isFinish()) {
      throw new Error(ERROR_MESSAGE.PLAY.MORE_ROUND_THAN_ALLOWED);
    }

    this._moveCars();
    this.#refree.clearRound();
  }

  getRoundResult() {
    return this.#carList.map((car) => car.getPositionResult());
  }

  getWinners() {
    if (!this.isFinish()) throw new Error(ERROR_MESSAGE.PLAY.LEFT_ROUND);

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
