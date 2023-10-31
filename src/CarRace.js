import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";

class CarRace {
  constructor(carsName) {
    this.cars = carsName.map((item) => new Car(item));
  }
  play() {
    this.cars.forEach((car) => {
      car.move();
    });
  }
  showResult() {}
}

export default CarRace;
