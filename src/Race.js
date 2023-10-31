import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
const MIN_TO_MOVE = 4;
const MIN_RANDOM = 0;
const MAX_RANDOM = 9;

class Race {
  constructor(carNames) {
    this.cars = carNames.map((cars) => new Car(cars));
  }

  startRound() {
    this.cars.forEach((car) => {
      if (Random.pickNumberInRange(MIN_RANDOM, MAX_RANDOM) >= MIN_TO_MOVE) {
        car.moveForward();
      }
    });
  }

  stateOfRace() {
    return this.cars.map((car) => ({
      name: car.name,
      distance: car.shapeOfDistance, // 이동한 거리만큼의 '-'를 가져옴
    }));
  }

  decideWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    return this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  }
}

export default Race;
