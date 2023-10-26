import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, SYMBOLS } from '../utils/constants.js';
import {
  validateCarName,
  validateRoundsNumber,
} from '../utils/validateUtils.js';

const inputView = {
  async readNamesInput() {
    const input = await Console.readLineAsync(GAME_MESSAGES.carNameQuery);
    const names = input.split(SYMBOLS.comma);
    names.forEach((item) => validateCarName(item));
    return names;
  },
  async readRoundsNumberInput() {
    const input = await Console.readLineAsync(GAME_MESSAGES.roundsNumberQuery);
    const roundsNumber = parseInt(input, 10);
    validateRoundsNumber(roundsNumber);
    return roundsNumber;
  },
};

export { inputView };
