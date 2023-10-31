import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import RacingCar from './RacingCar.js';
import { GAME_MESSAGES, NUMBER_RANGE } from './constants.js';
import {
  generateRandomNumber,
  validateCarNames,
  validateNumberInput,
} from './utils.js';

class RacingGame {
  #cars;
  #tryCount;

  constructor() {
    this.#cars = [];
    this.#tryCount = 0;
  }

  async setupInputCarNames() {
    const carNames = await InputView.inputGetCarNames();
    if (validateCarNames(carNames)) {
      carNames.forEach((name) => this.addCar(name));
    }

    this.setupInputTryCount();
  }

  async setupInputTryCount() {
    const tryCount = await InputView.inputgetTryCount();
    if (validateNumberInput(tryCount)) {
      this.#tryCount = tryCount;
    }
    this.play();
  }

  addCar(name) {
    this.#cars.push(new RacingCar(name));
  }

  play() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(GAME_MESSAGES.EXECUTION_RESULT);

    for (let i = 0; i < this.#tryCount; i++) {
      this.#cars.forEach((car) => {
        const random = generateRandomNumber(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
        car.move(random);
      });
      OutputView.printRoundResults(this.#cars);
    }
    this.findWinners();
  }

  findWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    this.showWinners(winners);
  }

  showWinners(winners) {
    OutputView.printFinalResult(winners);
  }
}

export default RacingGame;
