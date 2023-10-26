import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/constants.js';

const inputView = {
  async readNamesInput() {
    return await Console.readLineAsync(GAME_MESSAGES.carNameQuery);
  },
  async readRoundsNumberInput() {
    return await Console.readLineAsync(GAME_MESSAGES.roundsNumberQuery);
  },
};

export { inputView };
