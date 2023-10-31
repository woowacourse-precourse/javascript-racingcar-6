import { Console } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';
import AppView from './appVIew.js';
import message from './message.js';

export default class App {
  constructor() {
    this.racingCars = [];
    this.repeatCount = 0;
  }

  async play() {
    AppView.printGameStart();
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
      throw new Error(message.CAR_NAME_ERROR);
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
    this.repeatCount = await Console.readLineAsync(message.ASK_REPEAT_COUNT);
    this.repeatCountValidation(this.repeatCount);
  }

  repeatCountValidation(repeatCount) {
    const numberRegex = /^[0-9]+$/;
    const numberValidate = numberRegex.test(repeatCount);
    const zeroValidate = +repeatCount === 0;
    if (!numberValidate || zeroValidate) throw new Error(message.REPEAT_COUNT_ERROR);
  }

  repeatGame() {
    AppView.printResultHeader();
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.repeatCarMove();
      AppView.printGap();
    }
    this.winnerSelection();
  }

  repeatCarMove() {
    this.racingCars.forEach((car) => {
      car.carMoveEvaluation();
      AppView.printCarStatus(car.name, car.distance);
    });
  }

  winnerSelection() {
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
    return this.racingCars.reduce((max, { distance }) => Math.max(max, distance), 0);
  }
}
