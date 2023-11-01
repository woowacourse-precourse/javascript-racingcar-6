import { Random } from "@woowacourse/mission-utils";
import { input } from "../util/input.js";
import { print } from "../util/output.js";
import { validCars } from "../validation/carsValidation.js";
import { vaildTryCount } from "../validation/tryValidation.js";
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  NUMBER_RANGE,
  OUTPUT_MESSAGE,
} from "../constants/constant.js";
import { makeCarsArray } from "../util/message.js";
import { getRandomNumber, isMove } from "../util/random.js";

export class RacingGame {
  constructor() {
    this.cars = {};
  }

  async initCars() {
    const NAME = await input(INPUT_MESSAGE.INPUT_NAME);
    const CARS_ARRAY = await makeCarsArray(NAME);

    CARS_ARRAY.forEach((car) => {
      this.cars[car] = 0;
    });
  }

  async initTryCount() {
    const COUNT = await input(INPUT_MESSAGE.TRY_COUNT);
    const VAILD_COUNT = vaildTryCount(+COUNT);
    return VAILD_COUNT;
  }

  async go(TRY_COUNT) {
    let num = 0;
    while (TRY_COUNT > num) {
      await this.moveCars();
      await print("");
      num++;
    }
  }
  async start() {
    await this.initCars();
    const TRY_COUNT = await this.initTryCount();

    await this.go(TRY_COUNT);

    await this.printWinner();
  }

  async moveCars() {
    for (let car in this.cars) {
      await this.moveCar(car);
      await this.printResultMove(car);
    }
  }

  async moveCar(car) {
    const MOVE = await isMove();
    if (MOVE) {
      this.cars[car] += 1;
    }
  }

  async printResultMove(car) {
    let progress = "";
    for (let i = 0; i < this.cars[car]; i++) {
      progress += "-";
    }

    if (progress !== "") await print(`${car} : ${progress}`);
  }

  async printWinner() {
    const HIGHEST_SCORE = Object.values(this.cars).sort((a, b) => b - a)[0];

    let winner = [];
    for (let car in this.cars) {
      if (this.cars[car] === HIGHEST_SCORE) winner.push(car);
    }

    print(`최종 우승자 : ${winner.join(", ")}`);
  }
}
