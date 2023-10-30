import Car from "../models/Car.js";
import { generateRandomNumber } from "../utils/generateRandomNumber.js";

class RacingGame {
  constructor(carNames, tryNumber) {
    this.carList = carNames.map((name) => new Car(name));
    this.tryNumber = tryNumber;
  }

  moveCar() {
    this.carList.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= 4) {
        car.moveForward();
      }
    });
  }

  startGame() {
    for (let i = 0; i < this.tryNumber; i++) {
      this.moveCar();
    }
  }
}

export default RacingGame;
