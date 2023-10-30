import { Console } from '@woowacourse/mission-utils';
import {
  checkIsValidNumber,
  generateRandomNumber,
  isUserInputValid,
  splitCarsInput,
} from './utils';

class App {
  #cars = new Map();
  #tryNumber = 0;
  #winner = [];
  #topScore = 0;

  async play() {
    await this.getCarName();
    await this.getTryNumber();
    this.startRacing();
    this.insertWinner();
    this.printWinner();
  }

  async getCarName() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const input = await Console.readLineAsync('');
    this.initializeCars(input);
  }

  initializeCars(carsInput) {
    isUserInputValid(carsInput);
    const cars = splitCarsInput(carsInput);
    cars.forEach((car) => {
      this.#cars.set(car, 0);
    });
  }

  async getTryNumber() {
    Console.print('시도할 횟수는 몇 회인가요?');
    const input = await Console.readLineAsync('');
    this.initTryNumber(input);
  }

  initTryNumber(numberInput) {
    checkIsValidNumber(numberInput);
    this.#tryNumber = Number(numberInput);
  }

  startRacing() {
    Console.print('');
    Console.print('실행 결과');
    for (let i = 0; i < this.#tryNumber; i += 1) {
      this.moveRandomDistance();
      Console.print('');
    }
  }

  moveRandomDistance() {
    this.#cars.forEach((distance, car) => {
      const randomNumber = generateRandomNumber();
      this.#cars.set(car, distance + randomNumber);
      this.printMoveResult(car);
    });
  }

  printMoveResult(car) {
    const distance = this.#cars.get(car);
    const result = '-'.repeat(distance);
    Console.print(`${car} : ${result}`);
  }

  insertWinner() {
    this.initTopScore();
    this.insertWinner();
  }

  initTopScore() {
    this.#cars.forEach((value) => {
      this.#topScore = Math.max(this.#topScore, value);
    });
  }

  insertWinner() {
    this.#cars.forEach((value, key) => {
      if (value === this.#topScore) {
        this.#winner.push(key);
      }
    });
  }

  printWinner() {
    const winnerString = this.#winner.join(', ');
    Console.print(`최종 우승자 : ${winnerString}`);
  }
}

export default App;
