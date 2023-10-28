import { INPUT_MESSAGE } from "../constants/constant.js";
import { isMove } from "../util/Random.js";
import { input } from "../util/input.js";
import { makeCarsArray } from "../util/message.js";
import { print } from "../util/output.js";
import { vaildTryCount } from "../validation/tryValidation.js";

export class RacingGame {
  constructor() {
    this.cars = {};
    this.tryCount = 0;
  }

  async initCars() {
    const name = await input(INPUT_MESSAGE.INPUT_NAME);
    const cars = await makeCarsArray(name);

    cars.forEach((car) => {
      this.cars[car] = 0;
    });
  }

  async initTryCount() {
    const count = await input(INPUT_MESSAGE.TRY_COUNT);
    const VAILD_COUNT = vaildTryCount(+count);
    this.tryCount = VAILD_COUNT;
  }

  async go(num) {
    await this.moveCar();
    await print("");

    if (num < this.tryCount) await this.go(num + 1);
  }
  async start() {
    await this.initCars();
    await this.initTryCount();

    await this.go(1);

    await this.printWinner();
  }

  async moveCar() {
    await Object.keys(this.cars).forEach(async (car) => {
      const move = await isMove();
      if (move) {
        this.cars[car] += 1;
      }
      await this.printResultMove(car);
    });
  }

  async printResultMove(car) {
    let progress = "";
    for (let i = 0; i < this.cars[car]; i++) {
      progress += "-";
    }

    return print(`${car} : ${progress}`);
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
