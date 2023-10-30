import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
class InputView {
  #inputValidator;
  constructor(inputValidator) {
    this.#inputValidator = inputValidator;
  }
  // 1. 자동차 이름 입력
  async inputCarName() {
    const input = await Console.readLineAsync(MESSAGE.START_CAR_NAME);
    // 검증 보내기
    this.#inputValidator.validateCarsInput(input);
  }
  // 2. 시도 횟수 입력
  async inputNumberOfAttempt() {
    const input = await Console.readLineAsync(MESSAGE.START_NUMBER_OF_ATTEMPT);
    // 검증 보내기
    this.#inputValidator.validateNumbersInput(input);
  }
}
export default InputView;
