import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/gameMessage.js';

export default class InputReader {
  async carNames() {
    this.#onRead(GAME_MESSAGE.REQUEST_CAR_NAMES);
  }

  async #onRead(message) {
    try {
      const response = await Console.readLineAsync(message);
      if (!isOk(response)) {
        throw new Error(
          `[ERROR] 예기치 못한 입력이 들어왔습니다 input :${response}`
        );
      }

      return response;
    } catch (error) {
      alert(`\n${error.message} 라는 이유로 게임을 종료합니다 T_T`);
      throw error;
    }
  }
}

const isOk = (response) => response !== null || response !== undefined;

const alert = (text) => {
  console.log(text);
};
