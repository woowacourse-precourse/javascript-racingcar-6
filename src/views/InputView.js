import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';

class InputView {
  #inputValidator;

  constructor(inputValidator) {
    this.#inputValidator = inputValidator;
  }

  async readCarNamesInput() {
    const input = await Console.readLineAsync(
      GAME_MESSAGES.carNameQuery + '\n'
    );
    const names = input.split(SYMBOLS.carNameSeparator);
    this.#inputValidator.validateCarNames(names);
    return names;
  }

  async readRoundsNumberInput() {
    const input = await Console.readLineAsync(
      GAME_MESSAGES.roundsNumberQuery + '\n'
    );
    const roundsNumber = parseInt(input, 10);
    this.#inputValidator.validateRoundsNumber(roundsNumber);
    return roundsNumber;
  }
}

export default InputView;
