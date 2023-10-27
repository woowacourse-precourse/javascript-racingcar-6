import { MissionUtils } from "@woowacourse/mission-utils";

class GameModel {
  constructor(carNames, attempts) {
    this.CARS = carNames;
    this.ATTEMPTS = attempts;
  }

  run() {
    for (let attempt = 0; attempt < this.ATTEMPTS; attempt++) {
      this.CARS.forEach((car) => MissionUtils.Console.print(car));
    }
  }
}

export default GameModel;
