import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Cars";

class GameModel {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
  }

  run() {
    for (let attempt = 0; attempt < this.attempts; attempt++) {
      this.cars.forEach((car) => {
        MissionUtils.Console.print(car);
      });
    }
  }
}

export default GameModel;
