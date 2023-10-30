import { Console } from '@woowacourse/mission-utils';
import { ErrorMessage, GameMessage } from '../models/const.js';
import Racer from './racer.js';
import Round from './round.js';

export default class Race {
  #racer;
  #round;

  constructor() {
    this.#racer = new Racer();
    this.#round = new Round();
  }

  async start() {
    await this.#requestRacer();
    await this.#requestRound();
  }

  async #requestRacer() {
    const racers = await Console.readLineAsync(GameMessage.InputRacer);

    if (!this.#racer.isValidValue(racers)) {
      throw new Error(ErrorMessage.RacerName);
    }
  }

  async #requestRound() {
    const round = await Console.readLineAsync(GameMessage.InputRound);

    if (!this.#round.isValidValue(round)) {
      throw new Error(ErrorMessage.Round);
    }
  }
}
