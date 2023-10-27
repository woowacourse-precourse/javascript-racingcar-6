import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';

class InputView {
  #validator;

  constructor(validator) {
    this.#validator = validator;
  }

  async readCarNamesInput() {
    const input = await Console.readLineAsync(
      GAME_MESSAGES.carNameQuery + '\n'
    );
    const names = input.split(SYMBOLS.carNameSeparator);
    this.#validator.validateCarNames(names);
    return names;
  }

  async readRoundsNumberInput() {
    const input = await Console.readLineAsync(
      GAME_MESSAGES.roundsNumberQuery + '\n'
    );
    const roundsNumber = parseInt(input, 10);
    this.#validator.validateRoundsNumber(roundsNumber);
    return roundsNumber;
  }
}

export default InputView;
