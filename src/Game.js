import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor(count, carNames) {
    this.count = count;
    this.cars = carNames.map((name) => new Car(name));
  }

  runRaces() {
    for (let i = 0; i < this.count; i += 1) {
      this.cars.forEach((car) => car.move());
      Console.print("");
    }
  }

  getMaxPos() {
    let maxPosition = -Infinity;
    this.cars.forEach((car) => {
      maxPosition = Math.max(maxPosition, car.position);
    });
    return maxPosition;
  }

  announceWinner() {
    const maxPosition = this.getMaxPos();
    const winnersCar = this.cars.filter((car) => car.position === maxPosition);
    const winnerCarName = winnersCar.map((car) => car.name);

    Console.print(`최종 우승자 : ${winnerCarName.join(", ")} 입니다.`);
  }
}

export default Game;