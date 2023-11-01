import { MissionUtils } from "@woowacourse/mission-utils";
import { checkCarNames, checkTryCount } from "./check";
import { MESSAGES } from "../Message";
const { Console } = MissionUtils;

class UserInput {
  #carNames = [];
  #tryCount = 0;

  async inputCarNames() {
    const names = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    this.#carNames = checkCarNames(names);
  }
  async inputTryNumbers() {
    const number = await Console.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
    this.#tryCount = checkTryCount(number);
  }
  async input() {
    await this.inputCarNames();
    await this.inputTryNumbers();
  }
  getCarName() {
    return this.#carNames;
  }
  getTryCount() {
    return this.#tryCount;
  }
}

export default UserInput;
