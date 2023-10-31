import Constant from "./Constant.js";
import Message from "./Message.js";

class InputValidator {
  static CarNames(input) {
    // 이름을 , 로 구분 안 한 경우 (미입력)
    if (!input.includes(Constant.COMMA)) {
      throw new Error(Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA);
    }
    const carNames = input.split(Constant.COMMA).filter((name) => name !== "");
    // 이름이 5자 초과한 경우
    for (const carName of carNames) {
      if (carName.length > Constant.MAX_NAME_LENGTH) {
        throw new Error(Message.ERROR.NAME_EXCEEDED_MAX_LEN);
      }
    }
    // 이름이 중복된 경우
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(Message.ERROR.NAME_HAS_REDUNDANCY);
    }
    return carNames;
  }
  static executionCount(input) {
    // 실행 횟수를 숫자가 아닌 입력을 한 경우 (미입력)
    if (!Constant.POSITIVE_INT_REGEX.test(input)) {
      throw new Error(Message.ERROR.EXECUTE_COUNT_SHOULD_BE_POSITIVE_INT);
    }
    return Number(input);
  }
}

export default InputValidator;
