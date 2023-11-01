import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants';

const Input = {
  async getCarNamesFromUser() {
    const userInput = await Console.readLineAsync(`${MESSAGE.INPUT_CAR_NAME}\n`);
    return userInput;
  },

  async getGameCountFromUser() {
    const userInput = await Console.readLineAsync(`${MESSAGE.INPUT_GAME_COUNT}\n`);
    return userInput;
  },
};

export default Input;
