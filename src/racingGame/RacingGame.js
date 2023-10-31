import { Console } from "@woowacourse/mission-utils";
import Car from "../models/Car.js";
import { generateRandomNumber } from "../utils/generateRandomNumber.js";
import { calculateWinners } from "../utils/calculateWinners.js";
import { COMMAND } from "../utils/constants.js";
import { GAME_RULE } from "../utils/constants.js";

class RacingGame {
  constructor(carNames, tryNumber) {
    this.carList = carNames.map((name) => new Car(name));
    this.tryNumber = tryNumber;
  }

  moveCar() {
    this.carList.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= GAME_RULE.FORWARD_STANDARD) {
        car.moveForward();
      }
    });
  }

  printCarProgress() {
    this.carList.forEach((car) => {
      Console.print(`${car.name} : ${car.printProgress()}`);
    });
    Console.print("");
  }

  startGame() {
    for (let i = 0; i < this.tryNumber; i++) {
      this.moveCar();
      this.printCarProgress();
    }
    Console.print(`${COMMAND.RESULT_MESSAGE}${calculateWinners(this.carList)}`);
  }
}

export default RacingGame;
