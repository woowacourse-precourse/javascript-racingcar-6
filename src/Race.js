import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
const MIN_TO_MOVE = 4;

class Race {
  constructor(arrCarName) {
    // 각각의 자동차 이름들로 Car 인스턴스를 생성하여 배열에 담음.
    this.cars = arrCarName.map((cars) => new Car(cars));
  }

  startRound() {
    this.cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= MIN_TO_MOVE) {
        car.moveForward();
      }
    });
  }

  stateOfRace() {
    return this.cars.map((car) => ({
      name: car.name,
      distance: car.getDistance(), // 이동한 거리만큼의 '-'를 가져옴
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
