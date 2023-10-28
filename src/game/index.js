import { INPUT_MESSAGE } from "../constants/constant.js";
import { isMove } from "../util/Random.js";
import { input } from "../util/input.js";
import { makeCarsArray } from "../util/message.js";
import { print } from "../util/output.js";

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
    this.tryCount = +count;
  }



  async go(num) {
    
    await Object.keys(this.cars).forEach(async (car) => {
      const move = await isMove();
      if (move) {
        this.cars[car] += 1;
      }
      await print(`${car} : ${this.cars[car]}`);
    });
    await print('');
    

    if (num <= this.tryCount) await this.go(num + 1);
  }

}
