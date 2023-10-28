import { Random, Console } from "@woowacourse/mission-utils";
import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from "./lib/constants.js";
import { INPUT_PROMPT1, INPUT_PROMPT2, INVALID_INPUT1, INVALID_INPUT2 } from "./lib/logs.js";

class App {
  cars;
  carsNum;
  carsProgress;
  tryNum;

  async play() {
    await this.inputCarsWithValidate();
    await this.inputTryWithValidate();
    this.init();
    this.run();
    this.printWinners();
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
    Console.print("");
  }

  validateTry(str) {
    if (!/^[1-9]\d*$/.test(str)) throw Error(INVALID_INPUT2);
  }

  init() {
    const CARS_NUM = this.cars.length;
    this.carsNum = CARS_NUM;
    this.carsProgress = Array.from({ length: CARS_NUM }, () => 0);
  }

  // recursive
  run(curr = 0) {
    if (curr === 0) Console.print("실행 결과");
    if (this.tryNum <= curr) return;
    const randomArr = Array.from({ length: this.carsNum }, () => Random.pickNumberInRange(0, 9));
    randomArr.forEach((e, i) => (e >= 4 ? this.carsProgress[i]++ : null));
    this.carsProgress.forEach((_, i) => this.printEachProgress(i));
    Console.print("");
    this.run(curr + 1);
  }

  printEachProgress(idx) {
    const PROGRESS = "-".repeat(this.carsProgress[idx]);
    Console.print(`${this.cars[idx]} : ${PROGRESS}`);
  }

  printWinners() {
    const MAX = Math.max(...this.carsProgress);
    const WINNERS = [];
    this.carsProgress.forEach((e, i) => (e === MAX ? WINNERS.push(this.cars[i]) : null));
    Console.print(`최종 우승자 : ${WINNERS.join(", ")}`);
  }
}

export default App;
