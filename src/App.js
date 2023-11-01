import { CONSTANTS } from './constants/index.js';
import { Console } from '@woowacourse/mission-utils';
import InputProcessor from './utils/inputProcessor';
import Race from './models/Race.js';

class App {
  #raceCars;

  constructor() {
    this.#raceCars = [];
  }

  async play() {
    await this.initRace();
    this.runRace();
    this.announceWinner();
  }

  async initRace() {
    const carNames = await Console.readLineAsync(CONSTANTS.INPUT_MESSAGES.CAR_NAMES);
    const carNameList = await InputProcessor.processCarNames(carNames);

    const attempts = await Console.readLineAsync(CONSTANTS.INPUT_MESSAGES.ATTEMPTS);
    const numberOfAttempts = await InputProcessor.processAttempts(attempts);

    this.#raceCars = new Race(carNameList, numberOfAttempts);
  }

  runRace() {
    this.#raceCars.startRace();
  }

  announceWinner() {
    const winnerNames = this.#raceCars?.findWinner();
    Console.print(`${CONSTANTS.OUTPUT_MESSAGES.WINNER_PREFIX}${winnerNames}`);
  }
}

export default App;
