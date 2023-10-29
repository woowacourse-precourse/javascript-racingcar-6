import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_SIGN, THRESHOLD } from './lib/constants.js';
import LOGS from './lib/logs.js';
import { computeWinners, generateRandomArr } from './util.js';
import Validator from './Validator.js';

class App {
  constructor() {
    this.cars = [];
    this.carsNum = 0;
    this.carsProgress = [];
    this.tryNum = 0;
  }

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
    const inputArr = input.replace(/\s/g, '').replace(/,+/g, ',').split(',');
    inputArr.forEach(str => Validator.validateEachLength(str));
    Validator.validateDuplicate(inputArr);
    this.cars = inputArr;
  }

  async inputTryWithValidate() {
    const input = await Console.readLineAsync(LOGS.INPUT_PROMPT2);
    Validator.validateTryIsNumber(input);
    this.tryNum = parseInt(input, 10);
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

  // 순회별 점수 계산
  computeScore() {
    const randomArr = generateRandomArr(this.carsNum);
    randomArr.forEach((value, i) => this.evaluateEachIsForward(value, i));
  }

  // 진행도 평가
  evaluateEachIsForward(value, idx) {
    const IS_FORWARD = value >= THRESHOLD ? 1 : 0;
    this.carsProgress[idx] += IS_FORWARD;
  }

  // 이름별 진행도 출력
  printEachProgress(idx) {
    const PROGRESS = PROGRESS_SIGN.repeat(this.carsProgress[idx]);
    Console.print(LOGS.progressPrompt(this.cars[idx], PROGRESS));
  }

  // 우승자들 출력
  printWinners() {
    const MAX = Math.max(...this.carsProgress);
    const WINNERS = computeWinners(this.carsProgress, this.cars, MAX);
    Console.print(LOGS.winnerPrompt(WINNERS));
  }
}

export default App;

// this.cars.filter(e => {});
