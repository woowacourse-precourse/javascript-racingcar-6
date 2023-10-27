import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Cars";

class GameModel {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
    this.controller = null;
  }

  registerController(controller) {
    this.controller = controller;
  }

  run() {
    for (let attempt = 0; attempt < this.attempts; attempt++) {
      this.cars.forEach((car) => {
        car.move();
        this.controller.updateCarProgress(car);
      });
    }
  }
}

export default GameModel;
