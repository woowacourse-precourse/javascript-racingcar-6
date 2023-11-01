import { Random } from "@woowacourse/mission-utils";
const InputError = require("../lib/utils/error.js");
const Car = require("../models/car.js");
import ConsoleView from "../views/consoleView.js";
const { GAME_MESSAGE } = require("../lib/constants/message.js");
const { WORD } = require("../lib/constants/word.js");

class AppController {
  constructor() {
    this.Error = new InputError();
    this.carList = [];
  }

  async play() {
    const carList = await this.getCarList();
    const count = await this.getTryCount();

    this.moveForwardCar(carList, count);
  }

  async getCarList() {
    const carInput = await ConsoleView.readLineAsync(GAME_MESSAGE.CAR_INPUT);
    const carNames = carInput.split(",");

    carNames.forEach((name) => {
      const car = new Car(name.trim());
      this.carList.push(car);
    });

    this.Error.validateCarInput(carNames);

    return this.carList;
  }

  async getTryCount() {
    const tryCount = await ConsoleView.readLineAsync(GAME_MESSAGE.COUNT_INPUT);

    this.Error.validateCountInput(tryCount);

    return parseInt(tryCount);
  }

  moveForwardCar(carList, count) {
    ConsoleView.print(GAME_MESSAGE.RESULT);

    for (let i = 0; i < count; i++) {
      this.round(carList);
    }

    const maxScore = Math.max(...carList.map((car) => car.score));
    const winners = carList.map((car) => {
      if (car.score === maxScore) return car.name;
    });

    ConsoleView.print(`${GAME_MESSAGE.WINNER} : ${winners.join(", ")}`);
  }

  round(carList) {
    carList.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);

      if (randomValue >= 4) {
        car.increaseScore();
      }

      ConsoleView.print(`${car.name} : ${WORD.PROGRESS.repeat(car.score)}`);
    });
  }
}

module.exports = AppController;
