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

  async setupGame() {
    const carNames = await InputView.inputGetCarNames();
    if (validateCarNames(carNames)) {
      carNames.forEach((name) => this.addCar(name));
    }

    const tryCount = await InputView.inputgetTryCount();
    if (validateNumberInput(tryCount)) {
      this.#tryCount = tryCount;
    }
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

    OutputView.printFinalResult(this.#cars);
  }
}

export default RacingGame;
