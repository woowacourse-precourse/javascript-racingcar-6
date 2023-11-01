import { ErrorMessage, GameMessage } from '../models/const.js';
import Car from './car.js';
import Round from './round.js';
import Util from '../utils/util.js';

export default class Race {
  #racingState;
  #car;
  #round;

  constructor(racingState) {
    this.#racingState = racingState;
    this.#car = new Car(racingState);
    this.#round = new Round(racingState);
    this.#racingState.subscribe(this.#printResultByRound);
  }

  async start() {
    await this.#requestCarName();
    await this.#requestRound();
    this.#checkResultByRound();
    this.#announceWinner();
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

  #checkResultByRound() {
    Util.printConsole(GameMessage.RunResult);
    let loopCondition = true;

    while (loopCondition) {
      this.#car.moveForwardOrStop();
      this.#round.minusOneRound();

      if (!this.#racingState.currentState.round) {
        loopCondition = false;
      }
    }
  }

  #printResultByRound = ({ cars }) => {
    const messages = cars.map(({ name, progress }) => this.#getResultMessage(name, progress));

    Util.printConsole(`${messages.join('\n')}\n`);
  };

  #getResultMessage(name, progress) {
    return `${name} : ${GameMessage.MovementSign.repeat(progress)}`;
  }

  #announceWinner() {
    const message = `${GameMessage.FinalWinner}${this.#car.getWinners()}`;

    Util.printConsole(message);
  }
}
