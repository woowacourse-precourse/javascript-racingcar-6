import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/constant.js";

// 1. 사용자의 입력을 받는다.
const InputView = {
  async getCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.getCarNames);
    return carNames;
  },
  async getTryCount() {
    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.getTryCount);
    return tryCount;
  },
};

export default InputView;
