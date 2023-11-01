import Car from "./Car.js";
import UserInput from "./UserInput.js";
import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";

class RacingcarGame {
  participant;
  tryNumber;
  raceCount;

  async start() {
    try {
      const user = new UserInput();
      this.participant = await user.getCarNames();
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

    for (let carName in this.participant) {
      if (car.chooseGoOrStop()) {
        this.participant[carName]++;
      }
    }

    this.printRacingResult();
  }

  printRacingResult() {
    if (this.raceCount === this.tryNumber) {
      Console.print(Messages.RACE_RESULT);
    }

    for (let carName in this.participant) {
      Console.print(
        `${carName} : ${Messages.RACE_MARK.repeat(this.participant[carName])}`
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

    for (let carName in this.participant) {
      if (this.participant[carName] > max) {
        max = this.participant[carName];
        winner = [carName];
      } else if (this.participant[carName] === max) {
        winner.push(carName);
      }
    }

    return winner;
  }
}

export default RacingcarGame;
