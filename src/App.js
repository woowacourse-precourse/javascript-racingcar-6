import { Random, Console } from "@woowacourse/mission-utils";
import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from "./lib/constants.js";
import { INPUT_PROMPT1, INPUT_PROMPT2, INVALID_INPUT1, INVALID_INPUT2 } from "./lib/logs.js";

class App {
  constructor() {
    this.cars;
    this.carsNum;
    this.carsProgress;
    this.tryNum;
  }

  async play() {
    await this.inputCarsWithValidate();
    await this.inputTryWithValidate();
    console.log(this.tryNum);
    this.init();
    console.log(this.cars);
    console.log(this.carsNum);
    console.log(this.carsProgress);
  }

  async inputCarsWithValidate() {
    const input = await Console.readLineAsync(INPUT_PROMPT1);
    const inputArr = input.replace(/\s/g, "").replace(/,+/g, ",").split(",");
    inputArr.forEach((str) => this.validateInputLength(str));
    this.cars = inputArr;
  }

  validateInputLength(str) {
    if (!(str.length >= MIN_NAME_LENGTH && str.length <= MAX_NAME_LENGTH)) throw Error(INVALID_INPUT1);
  }

  async inputTryWithValidate() {
    const input = await Console.readLineAsync(INPUT_PROMPT2);
    this.validateTry(input);
    this.tryNum = parseInt(input, 10);
  }

  validateTry(str) {
    if (!/^[1-9]\d*$/.test(str)) throw Error(INVALID_INPUT2);
  }

  init() {
    const CARS_NUM = this.cars.length;
    this.carsNum = CARS_NUM;
    this.carsProgress = Array.from({ length: CARS_NUM }, () => 0);
  }

  // progress(curr) {
  //   if (curr) return;
  //   const random = Array.from({ length: CARS_NUM }, () => Random.pic);
  //   this.progress(maxTry);
  // }
}

export default App;
