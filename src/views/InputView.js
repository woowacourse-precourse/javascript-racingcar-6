import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';

class InputView {
  #validator;

  constructor(validator) {
    this.#validator = validator;
  }

  async readNamesInput() {
    const input = await Console.readLineAsync(GAME_MESSAGES.carNameQuery);
    const names = input.split(SYMBOLS.comma);
    this.#validator.validateCarNames(names);
    return names;
  }

  async readRoundsNumberInput() {
    const input = await Console.readLineAsync(GAME_MESSAGES.roundsNumberQuery);
    const roundsNumber = parseInt(input, 10);
    this.#validator.validateRoundsNumber(roundsNumber);
    return roundsNumber;
  }
}

export default InputView;
