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
    // 공백 제거, 연속된 쉼표 1개로 통일
    const inputArr = input.replace(/\s/g, "").replace(/,+/g, ",").split(",");
    inputArr.forEach((str) => this.validateEachLength(str));
    this.cars = inputArr;
  }

  validateEachLength(str) {
    // 자동차 이름 길이 1 이상 5 이하
    if (!(str.length >= MIN_NAME_LENGTH && str.length <= MAX_NAME_LENGTH)) throw Error(LOGS.INVALID_INPUT1);
  }

  validateDuplicate(arr) {}

  async inputTryWithValidate() {
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT2);
    this.validateTryIsNumber(input);
    this.tryNum = parseInt(input, 10);
  }

  validateTryIsNumber(str) {
    if (!/^[1-9]\d*$/.test(str)) throw Error(LOGS.INVALID_INPUT2); // 자연수인지 체크
  }

  // 입력값 토대로 초기화
  init() {
    const CARS_NUM = this.cars.length;
    this.carsNum = CARS_NUM; // 자동차 수
    this.carsProgress = Array.from({ length: CARS_NUM }, () => 0); // 진행도 배열 0으로 초기화
  }

  // recursive
  run(curr = 0) {
    Console.print(LOGS.NEW_LINE); // 개행

    if (curr === 0) Console.print(LOGS.RUN_PROMPT); // 첫 실행결과 PROMPT
    if (this.tryNum <= curr) return; // 종료조건

    this.computeScore(); // 진행도 계산
    this.carsProgress.forEach((_, i) => this.printEachProgress(i));
    this.run(curr + 1); // 다음 회차 실행
  }

  computeScore() {
    const randomArr = Array.from({ length: this.carsNum }, () => Random.pickNumberInRange(0, 9));
    randomArr.forEach((e, i) => (e >= THRESHOLD ? this.carsProgress[i]++ : null));
  }

  // 이름별 진행도 출력
  printEachProgress(idx) {
    const PROGRESS = PROGRESS_SIGN.repeat(this.carsProgress[idx]);
    Console.print(LOGS.PROGRESS_PROMPT(this.cars(idx), PROGRESS));
  }

  // 우승자들 출력
  printWinners() {
    const MAX = Math.max(...this.carsProgress);
    const WINNERS = this.carsProgress.map((e, i) => (e === MAX ? this.cars[i] : null)).filter((e) => !!e);
    Console.print(LOGS.WINNER_PROMPT(WINNERS));
  }
}

export default App;
