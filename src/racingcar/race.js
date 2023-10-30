import { ErrorMessage, GameMessage } from '../models/const.js';
import Car from './car.js';
import Round from './round.js';
import Util from '../utils/util.js';

export default class Race {
  #car;
  #round;

  constructor() {
    this.#car = new Car();
    this.#round = new Round();
  }

  async start() {
    await this.#requestCarName();
    await this.#requestRound();
  }

  async #requestCarName() {
    const carNames = await Util.readLineAsyncConsole(`${GameMessage.InputCarName}\n`);

    if (!this.#car.isValidValue(carNames)) {
      throw new Error(ErrorMessage.CarName);
    }
  }

  async #requestRound() {
    const round = await Util.readLineAsyncConsole(`${GameMessage.InputRound}\n`);

    if (!this.#round.isValidValue(round)) {
      throw new Error(ErrorMessage.Round);
    }
  }
}
