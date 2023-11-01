import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/message.js';
import CAR from '../constants/car.js';
import RACING_GAME from '../constants/racingGame.js';
import MessageFormat from '../utils/messageFormat.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readCarName() {
    const userInput = await this.#inputView.readLineAsync(MESSAGE.read.carName);
    const carNames = userInput.split(CAR.name.separator);

    return carNames;
  }

  async readRound() {
    const userInput = await this.#inputView.readIntegerAsync(
      MESSAGE.read.round,
      RACING_GAME.round.radix,
    );

    return parseInt(userInput, RACING_GAME.round.radix);
  }

  printRaceResult({ winner, raceResult }) {
    const resultMessage = MessageFormat.raceResult(raceResult);
    const winnerMessage = MessageFormat.winner(winner);

    this.#outputView.print(resultMessage);
    this.#outputView.print(winnerMessage);
  }

  asy;
}

export default View;
