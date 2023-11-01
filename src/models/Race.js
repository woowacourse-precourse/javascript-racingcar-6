import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars.filter(
      (car) => car.getPosition() === maxPosition
    );
    return winners.map((car) => car.getName());
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(
        `${car.getName()} : ${"-".repeat(car.getPosition())}`
      );
    });
    MissionUtils.Console.print("");
  }

  start(raceCount) {
    for (let i = 0; i < raceCount; i++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResult();
    }
  }
}
