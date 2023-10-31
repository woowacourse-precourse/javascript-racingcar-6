import { Random } from '@woowacourse/mission-utils';
import { RANDOM, NUM } from '../constants/constants.js';

class CarData {
  #maxMove;

  #carList;

  constructor(cars) {
    this.#maxMove = 0;
    this.#carList = cars.map((car) => ({ name: car, move: 0 }));
  }

  static moveOrNot() {
    const moveOrNot = Random.pickNumberInRange(RANDOM.MIN, RANDOM.MAX);

    if (moveOrNot >= NUM.MOVE_FLAG_NUM) return true;
    return false;
  }

  updateMaxMove(moveCount) {
    this.#maxMove = Math.max(this.#maxMove, moveCount);
  }

  moveCar() {
    this.#carList = this.#carList.map((car) => {
      if (CarData.moveOrNot()) {
        this.updateMaxMove(car.move + 1);
        return { ...car, move: car.move + 1 };
      }
      return car;
    });
    return this.#carList;
  }

  findWinner() {
    const winners = this.#carList.filter((car) => car.move === this.#maxMove);
    return winners.map((car) => car.name);
  }
}

export default CarData;
