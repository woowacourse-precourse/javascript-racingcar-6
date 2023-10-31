import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
class InputView {
  #inputValidator;
  #inputConverter;

  constructor(inputValidator) {
    this.#inputValidator = inputValidator;
    this.#inputConverter = inputConverter;
  }
  // 1. 자동차 이름 입력
  async inputCars() {
    const input = await Console.readLineAsync(MESSAGE.START_CAR_NAME);

    // 검증 보내기
    this.#inputValidator.validateCarNamesInput(input);

    //반환해서 리턴
    // Cars[]
    // -> Cars에 넣어서 주기
    return this.#inputConverter.convertToCars(input);
  }
  // 2. 시도 횟수 입력
  async inputAttemptCount() {
    const input = await Console.readLineAsync(MESSAGE.START_NUMBER_OF_ATTEMPT);
    // 검증 보내기
    this.#inputValidator.validateAttemptCountInput(input);
    //반환해서 리턴
    return this.#inputConverter.convertToAttemptCount(input);
  }
}
export default InputView;
