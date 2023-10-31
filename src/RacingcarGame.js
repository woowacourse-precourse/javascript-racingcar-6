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
    // racingCar를 순회하며 가장 높은 값을 가진 자동차 이름을 찾는다.
    // 자동차 이름이 담긴 배열을 반환한다.
  }
}

export default RacingcarGame;
