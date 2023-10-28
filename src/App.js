import { Random, Console } from "@woowacourse/mission-utils";
import { MIN_NAME_LENGTH, MAX_NAME_LENGTH, PROGRESS_SIGN, THRESHOLD } from "./lib/constants.js";
import { LOGS } from "./lib/logs.js";

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
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT1);
    const inputArr = input.replace(/\s/g, "").replace(/,+/g, ",").split(",");
    inputArr.forEach((str) => this.validateEachLength(str));
    this.cars = inputArr;
  }

  validateEachLength(str) {
    if (!(str.length >= MIN_NAME_LENGTH && str.length <= MAX_NAME_LENGTH)) throw Error(LOGS.INVALID_INPUT1);
  }

  async inputTryWithValidate() {
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT2);
    this.validateTryIsNumber(input);
    this.tryNum = parseInt(input, 10);
  }

  validateTryIsNumber(str) {
    if (!/^[1-9]\d*$/.test(str)) throw Error(LOGS.INVALID_INPUT2);
  }

  init() {
    const CARS_NUM = this.cars.length;
    this.carsNum = CARS_NUM;
    this.carsProgress = Array.from({ length: CARS_NUM }, () => 0);
  }

  // recursive
  run(curr = 0) {
    Console.print(LOGS.NEW_LINE);

    if (curr === 0) Console.print(LOGS.RUN_PROMPT); // 첫 실행결과 PROMPT
    if (this.tryNum <= curr) return; // 종료조건

    this.computeScore();
    this.carsProgress.forEach((_, i) => this.printEachProgress(i));
    this.run(curr + 1);
  }

  computeScore() {
    const randomArr = Array.from({ length: this.carsNum }, () => Random.pickNumberInRange(0, 9));
    randomArr.forEach((e, i) => (e >= THRESHOLD ? this.carsProgress[i]++ : null));
  }

  printEachProgress(idx) {
    const PROGRESS = PROGRESS_SIGN.repeat(this.carsProgress[idx]);
    Console.print(LOGS.PROGRESS_PROMPT(this.cars(idx), PROGRESS));
  }

  printWinners() {
    const MAX = Math.max(...this.carsProgress);
    const WINNERS = this.carsProgress.map((e, i) => (e === MAX ? this.cars[i] : null)).filter((e) => !!e);
    Console.print(LOGS.WINNER_PROMPT(WINNERS));
  }
}

export default App;
