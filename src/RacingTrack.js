import Car from './Car.js';
import { paramType } from './utils/paramType.js';

export default class RacingTrack {
  #carList;

  constructor(carList, _ = paramType(carList, Array)) {
    this.#carList = carList;
  }

  moveEachCars(isMoveFowardList) {
    this.#carList.forEach((car, idx) => {
      const isMoveFoward = isMoveFowardList[idx];
      this.#moveCar(car, isMoveFoward);
    });
  }

  getRoundResult() {
    return this.#carList.map((car) => car.getPositionResult());
  }

  totalCarAmount() {
    return this.#carList.length;
  }

  mostMoveFowardDistance() {
    const carsPostions = this.getRoundResult().map(({ position }) => position);

    return Math.max(...carsPostions);
  }

  #moveCar(
    car,
    isFoward,
    _0 = paramType(car, Car),
    _1 = paramType(isFoward, 'boolean')
  ) {
    if (isFoward) car.moveFoward();
  }
}
