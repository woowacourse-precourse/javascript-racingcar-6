import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../utils/Validator.js';
import MESSAGE from '../constants/message.js';
import CAR from '../constants/car.js';
import RACING_GAME from '../constants/racingGame.js';
import MessageFormat from '../utils/messageFormat.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  #validator = Validator;

  async readCarName() {
    const userInput = await this.#inputView.readLineAsync(MESSAGE.read.carName);
    const carNames = userInput.split(CAR.name.separator);

    this.#validator.isDuplicateCarName(carNames);
    carNames.forEach(this.#validator.validateCarName.bind(this.#validator));

    return carNames;
  }

  async readRound() {
    const userInput = await this.#inputView.readLineAsync(MESSAGE.read.round);

    this.#validator.validateRound(userInput);

    return parseInt(userInput, RACING_GAME.round.radix);
  }

  printRaceResult({ winner, raceResult }) {
    const resultMessage = MessageFormat.raceResult(raceResult);
    const winnerMessage = MessageFormat.winner(winner);

    this.#outputView.print(resultMessage);
    this.#outputView.print(winnerMessage);
  }
}

export default View;
