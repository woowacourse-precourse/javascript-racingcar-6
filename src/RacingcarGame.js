import Car from "./Car.js";
import UserInput from "./UserInput.js";
import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";

class RacingcarGame {
  racingCar;
  tryNumber;
  raceCount;

  async start() {
    try {
      const user = new UserInput();
      this.racingCar = await user.getCarNames();
      this.tryNumber = await user.getTryNumber();
      this.raceCount = this.tryNumber;

      while (this.raceCount > 0) {
        this.race();
        this.raceCount--;
      }

      this.printWinner();
    } catch (error) {
      throw error;
    }
  }

  race() {
    const car = new Car();

    for (let carName in this.racingCar) {
      if (car.chooseGoOrStop()) {
        this.racingCar[carName]++;
      }
    }

    this.printRacingResult();
  }

  printRacingResult() {
    if (this.raceCount === this.tryNumber) {
      Console.print(Messages.RACE_RESULT);
    }

    for (let carName in this.racingCar) {
      Console.print(
        `${carName} : ${Messages.RACE_MARK.repeat(this.racingCar[carName])}`
      );
    }
    Console.print(`\n`);
  }

  printWinner() {
    const winner = this.getWinner();
    Console.print(`${Messages.WINNER}${winner.join(", ")}`);
  }

  getWinner() {
    let max = 0;
    let winner = [];
    for (let carName in this.racingCar) {
      if (this.racingCar[carName] > max) {
        max = this.racingCar[carName];
        winner = [carName];
      } else if (this.racingCar[carName] === max) {
        winner.push(carName);
      }
    }
    return winner;
  }
}

export default RacingcarGame;
