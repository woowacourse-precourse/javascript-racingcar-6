import { Console } from '@woowacourse/mission-utils';
import { ErrorMessage, GameMessage } from '../models/const.js';
import Racer from './racer.js';

export default class Race {
  #racer;

  constructor() {
    this.#racer = new Racer();
  }

  async start() {
    await this.#requestRacer();
  }

  async #requestRacer() {
    const racers = await Console.readLineAsync(GameMessage.InputRacer);

    if (!this.#racer.isValidValue(racers)) {
      throw new Error(ErrorMessage.RacerName);
    }
  }
}
