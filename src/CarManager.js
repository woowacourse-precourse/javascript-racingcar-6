import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car';
import { utils } from './constant/utils';
import OUTPUT_MESSAGES from './constant/outputMessage';

class CarManager {
  #cars = [];
  #attemptCount = 0;
  #maxDistanceAmongCars = 0;

  constructor(names, attemptCount) {
    utils.isArray(names);
    utils.isNumber(attemptCount);
    this.#attemptCount = attemptCount;
    names.forEach((name) => {
      this.#cars.push(new Car(name));
    });
  }

  #carMoveAndPrint(car) {
    const moveCount = car.move();
    if (this.#maxDistanceAmongCars < moveCount) {
      this.#maxDistanceAmongCars = moveCount;
    }
    car.print();
  }

  #maxDistanceAmongCarsEqualCarMoveCount() {
    const ret = this.#cars
      .filter((car) => car.getMoveCount() >= this.#maxDistanceAmongCars)
      .map((car) => car.getName())
      .join(', ');
    return (ret);
  }

  play() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.playReult);
    for (let index = 0; index < this.#attemptCount; index += 1) {
      this.#cars.forEach((car) => {
        this.#carMoveAndPrint(car);
      });
      MissionUtils.Console.print('');
    }
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.winner}${this.#maxDistanceAmongCarsEqualCarMoveCount()}`);
  }
}

export default CarManager;
