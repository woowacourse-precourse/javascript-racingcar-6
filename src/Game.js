import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor(carNames) {
    this.cars = [];
    carNames.forEach((car) => {
      const newCar = new Car(car);
      this.cars.push(newCar);
    });
  }
  raceRound(gameRound) {
    Console.print("\n실행 결과");

    for (let i = 0; i < gameRound; i++) {
      this.cars.forEach((car) => {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          car.moveForward();
        }
        car.printPosition();
      });
      Console.print("");
    }
  }
}

export default Game;
