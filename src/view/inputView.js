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
  async inputCarName() {
    const input = await Console.readLineAsync(MESSAGE.START_CAR_NAME);

    // 검증 보내기
    this.#inputValidator.validateCarsInput(input);

    //반환해서 리턴
    return this.inputConverter.convertFromInputToList(input);
  }
  // 2. 시도 횟수 입력
  async inputAttempt() {
    const input = await Console.readLineAsync(MESSAGE.START_NUMBER_OF_ATTEMPT);
    // 검증 보내기
    this.#inputValidator.validateNumbersInput(input);
    //반환해서 리턴
    return this.inputConverter.convertFromInputToNumber(input);
  }
}
export default InputView;
