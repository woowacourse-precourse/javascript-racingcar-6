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
    let maxPosition = -1;
    const winners = [];

    this.cars.forEach((car) => {
      if (car.carPosition > maxPosition) {
        maxPosition = car.carPosition;
        winners.length = 0; // Clear previous winners
        winners.push(car.name);
      } else if (car.carPosition === maxPosition) {
        winners.push(car.name); // Add another winner
      }
    });

    Console.print(`최종우승자 : ${winners.join(", ")}`);
  }
}

export default Game;
