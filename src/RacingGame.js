import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import RacingCar from './RacingCar.js';
import { GAME_MESSAGES } from './constants.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  async setupGame() {
    const carNames = await InputView.inputGetCarNames();
    carNames.forEach((name) => this.addCar(name));

    this.tryCount = await InputView.inputgetTryCount();
  }

  addCar(name) {
    this.cars.push(new RacingCar(name));
  }

  play() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(GAME_MESSAGES.EXECUTION_RESULT);
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => car.move());
      OutputView.printRoundResults(this.cars);
    }

    OutputView.printFinalResult(this.cars);
  }
}

export default RacingGame;
