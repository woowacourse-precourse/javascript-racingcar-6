import { readLineAsync } from "../utils/console/readLineAsync.js";
import { INPUT_MESSAGE } from "../constants/messages.js";

export default class InputView {
  constructor() {};

  // 자동차 이름을 입력받는다.
  static async inputCarNames() {
    const input = readLineAsync(INPUT_MESSAGE.INPUT_CAR_NAMES);
    return input;
  };
};
