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

    carNames.forEach(this.#validator.validateCarName.bind(this.#validator));

    return carNames;
  }

  async readRound() {
    const userInput = await this.#inputView.readLineAsync(MESSAGE.read.round);

    this.#validator.validateRound(userInput);

    return parseInt(userInput, RACING_GAME.round.radix);
  }

  printRaceResult(raceResult) {
    const { result, round } = MessageFormat;
    this.#outputView.print(result(round(raceResult)));
  }

  printWinners(winners) {
    this.#outputView.print(MessageFormat.winners(winners));
  }
}

export default View;
