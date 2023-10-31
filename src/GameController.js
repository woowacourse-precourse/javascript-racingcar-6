import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";
import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";
import * as m from "./constants/message.js";

export class GameController {
  constructor() {
    this.user = new User();
    this.carList = [];
  }

  async startGame() {
    const names = await this.user.inputCarNames();
    const tryNumber = await this.user.inputTryNumber();

    names.forEach((name) => this.carList.push(new Car(name)));
    Console.print(m.TRY_RESULT_MESSAGE);
    for (let i = 0; i < tryNumber; i++) {
      this.startRace();
      this.printRaceResult();
    }
    const winners = this.judgeWinner();
    this.printWinner(winners);
  }

  startRace() {
    this.carList.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generateRandomNumber();
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  printRaceResult() {
    this.carList.forEach((car) => {
      const distance = [];
      for (let i = 0; i < car.distance; i++) {
        distance.push("-");
      }
      Console.print(`${car.name} : ${distance.join("")}`);
    });
    Console.print("");
  }

  judgeWinner() {
    const winners = [];
    const distances = this.carList.map((car) => car.distance);
    const bestRecord = Math.max(...distances);
    this.carList.forEach((car) => {
      if (car.distance === bestRecord) {
        winners.push(car.name);
      }
    });
    return winners;
  }

  printWinner(winners) {
    const result = winners.join(", ");
    Console.print(`${m.WINNER_MESSAGE}${result}`);
  }
}
