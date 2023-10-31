import { readLineAsync } from "../utils/console/readLineAsync.js";
import { GUIDE_MESSAGE } from "../constants/messages.js";

export default class InputView {
  constructor() {}

  // 자동차 이름을 입력받는다.
  static async inputCarNames() {
    const input = await readLineAsync(GUIDE_MESSAGE.INPUT_CAR_NAMES);
    return input;
  }

  // 시도할 횟수를 입력받는다.
  static async inputNumbersOfMoves() {
    const input = await readLineAsync(GUIDE_MESSAGE.INPUT_NUMBERS_OF_MOVES);
    return input;
  }
}
