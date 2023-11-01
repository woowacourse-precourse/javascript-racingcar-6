import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Input from './utils/Input.js';
import { MESSAGES } from './constants/index.js';

class Game {
  /**
   * @type {Car[]}
   */
  #cars;

  /**
   * @type {number}
   */
  #trialCount;

  /**
   * @type {string[]}
   */
  #winners;

  constructor() {
    this.#cars = [];
    this.#trialCount = 0;
    this.#winners = [];
  }

  async #init() {
    const names = await Input.getCarNames();
    this.#cars = names.map((name) => new Car(name));

    this.#trialCount = await Input.getTrialCount();
  }

  async run() {
    await this.#init();
    Console.print(MESSAGES.GAME_RESULT_MESSAGE);

    for (let i = 0; i < this.#trialCount; i += 1) {
      this.#executeRound();
    }

    this.#announceWinners();
  }

  #executeRound() {
    this.#winners = Car.race(this.#cars);
    Console.print('');
  }

  #announceWinners() {
    Console.print(`${MESSAGES.WINNERS_MESSAGE}${this.#winners.join(', ')}`);
  }
}

export default Game;
