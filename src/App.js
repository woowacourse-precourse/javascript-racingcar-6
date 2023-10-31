import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from './constants/index.js';
import Race from './models/Race.js';
import ReaderView from './helpers/ReaderView.js';

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
    const carNameList = await ReaderView.readCarNames();
    const numberOfAttempts = await ReaderView.readAttempts();
    this.#raceCars = new Race(carNameList, numberOfAttempts);
  }

  runRace() {
    this.#raceCars.startRace();
  }

  announceWinner() {
    const winnerNames = this.#raceCars?.findWinner();
    Console.print(`${OUTPUT_MESSAGES.WINNER_PREFIX}${winnerNames}`);
  }
}

export default App;
