import { Console } from '@woowacourse/mission-utils';
import RacingCar from './racingCar.js';
import AppView from './appVIew.js';

export default class App {
  constructor() {
    this.racingCars = [];
    this.repeatCount = 0;
  }

  async play() {
    AppView.printInstruction();
    await this.getCarNamesInput();
    await this.getRepeatCountInput();
    this.repeatGame();
  }

  async getCarNamesInput() {
    const carNames = await Console.readLineAsync('');
    const splitCarNames = carNames.split(',');
    const carNamesRemoveWhitespace = splitCarNames.map((name) => name.trim());
    this.carNamesValidation(carNamesRemoveWhitespace);
  }

  carNamesValidation(carNames) {
    const setCarNames = new Set(carNames);
    const lengthValidate = carNames.some((name) => name.length > 5);
    const emptyValidate = carNames.some((name) => name === '');
    const uniqueValidate = setCarNames.size !== carNames.length;
    if (lengthValidate || emptyValidate || uniqueValidate) {
      throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
    }

    this.buildRacingCar(carNames);
  }

  buildRacingCar(carNames) {
    for (let i = 0; i < carNames.length; i += 1) {
      const carName = carNames[i];
      const car = new RacingCar(carName);
      this.racingCars.push(car);
    }
  }

  async getRepeatCountInput() {
    this.repeatCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.repeatCountValidation(this.repeatCount);
  }

  /* eslint-disable class-methods-use-this */
  repeatCountValidation(repeatCount) {
    const numberValidate = [...repeatCount].every((digit) => !Number.isNaN(+digit));
    if (!numberValidate) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  repeatGame() {
    AppView.printResultHeader();
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.repeatCarMove();
      AppView.printGap();
    }
    this.printWinner();
  }

  repeatCarMove() {
    this.racingCars.forEach((car) => {
      car.carMoveEvaluation();
      AppView.printCarStatus(car.name, car.distance);
    });
  }

  printWinner() {
    const maxDistance = this.getMaxDistance();
    const winnersName = this.getWinnersName(maxDistance);
    AppView.printWinner(winnersName);
  }

  getWinnersName(maxDistance) {
    const winners = [];
    this.racingCars.forEach(({ name, distance }) => {
      if (distance === maxDistance) winners.push(name);
    });
    return winners.join(', ');
  }

  getMaxDistance() {
    let maxDistance = 0;
    for (let i = 0; i < this.racingCars.length; i += 1) {
      const currentDistance = this.racingCars[i].distance;
      if (currentDistance > maxDistance) maxDistance = currentDistance;
    }
    return maxDistance;
  }
}
