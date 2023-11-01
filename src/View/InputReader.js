import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage.js';
import OutputView from './OutputView.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';

export default class InputReader {
  async carNames() {
    OutputView.printPadding();
    const userInput = this.#onRead(GAME_MESSAGE.REQUEST.CAR_NAME);

    return userInput;
  }

  async tryRount() {
    OutputView.printPadding();
    const userInput = this.#onRead(GAME_MESSAGE.REQUEST.TRY_ROUND);

    return userInput;
  }

  async #onRead(message) {
    try {
      const response = await Console.readLineAsync(message);
      if (!isOk(response)) {
        throw new Error(ERROR_MESSAGE.VIEW.UNEXPECTED_RESPONSE);
      }

      return response;
    } catch (error) {
      alert(ERROR_MESSAGE.VIEW.REASON(response, error.message));
      throw error;
    }
  }
}

const isOk = (response) => response !== null || response !== undefined;

const alert = (text) => {
  console.log(text);
};
