import { Random, Console } from '@woowacourse/mission-utils';
import { validateCarsInput, validateNumberOfAttemptsInput } from './validation.js';
import { MESSAGES } from './messages.js';
import Car from './Car.js';

class RacingcarGame {
  /**
   * @type Car[]
   */
  #cars;
  #numberOfAttempts;
  #winners;
  #THRESHOLD = 4;

  constructor() {
    this.#cars = [];
    this.#winners = [];
  }

  async start() {
    const carNames = await this.getCarNamesFromUser();

    this.addCars(carNames);

    this.#numberOfAttempts = await this.getNumberOfAttemptsFromUser();

    Console.print(MESSAGES.RESULT);

    for (let i = 0; i <= this.#numberOfAttempts; i++) {
      this.racing();
    }

    this.#winners = this.getResultWinners();

    this.printWinners();
  }

  /**
   * 사용자에게 경주할 자동차 String으로 입력 받기
   * @returns 자동차 이름 List
   */
  async getCarNamesFromUser() {
    const inputString = await Console.readLineAsync(MESSAGES.CAR_NAME);
    const carNames = inputString.split(',');

    validateCarsInput(carNames);
    return carNames;
  }

  /**
   *
   * @param {string[]} carNames
   */
  addCars(carNames) {
    carNames.forEach((carName) => {
      const car = new Car(carName);
      this.#cars.push(car);
    });
  }

  /**
   * 사용자에게 시도할 횟수 입력 받기
   */
  async getNumberOfAttemptsFromUser() {
    const numberOfAttempts = await Console.readLineAsync(MESSAGES.NUMBER_OF_ATTEMPTS);

    validateNumberOfAttemptsInput(numberOfAttempts);

    return parseInt(numberOfAttempts);
  }

  racing() {
    this.#cars.forEach((car) => {
      if (this.canMoveForward()) {
        car.movedForward();
      }

      this.printCarRacingResult(car);
    });

    Console.print('');
  }

  /**
   *
   * @returns 0~9사이의 랜덤 숫자
   */
  createRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  /**
   *
   * @returns 전진 가능한 지 반환
   */
  canMoveForward() {
    const randomNumber = this.createRandomNumber();
    return randomNumber >= this.#THRESHOLD;
  }

  /**
   *
   * @param {Car} car
   */
  printCarRacingResult(car) {
    Console.print(`${car.name} : ${'-'.repeat(car.moveForwardCount)}`);
  }

  sortCars() {
    this.#cars = [...this.#cars].sort(
      (car1, car2) => car2.moveForwardCount - car1.moveForwardCount,
    );
  }

  getMaximum() {
    this.sortCars();
    return this.#cars[0].moveForwardCount;
  }

  getResultWinners() {
    const maxCount = this.getMaximum();
    const winners = [];

    this.#cars.forEach((car) => {
      if (!this.isWinner(car, maxCount)) return;

      winners.push(car.name);
    });

    return winners;
  }

  /**
   *
   * @param {Car} car
   * @param {number} maxCount
   */
  isWinner(car, maxCount) {
    return car.moveForwardCount === maxCount;
  }

  printWinners() {
    Console.print(MESSAGES.WINNER.concat(this.#winners.join(', ')));
  }
}

export default RacingcarGame;
