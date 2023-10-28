import Constant from "./Constant.js";
import Message from "./Message.js";

const InputValidator = {
  CarNames(input) {
    // 이름을 , 로 구분 안 한 경우
    if (!input.includes(Constant.COMMA)) {
      throw new Error(Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA);
    }
    // , 가 연속으로 중복된 경우
    if (Constant.COMMA_REPEATED_REGEX.test(input)) {
      throw new Error(Message.ERROR.NAME_HAS_REPEATED_COMMA);
    }
    const carNames = input.split(Constant.COMMA);
    // 이름이 5자 초과한 경우
    for (const carName of carNames) {
      if (carName.length > Constant.MAX_NAME_LENGTH) {
        throw new Error(Message.ERROR.NAME_EXCEEDED_MAX_LEN);
      }
    }
    return carNames;
  },
  tryCount(input) {
    if (Constant.NON_NUM_REGEX.test(input)) {
      throw new Error(Message.ERROR.COUNT_SHOULD_BE_NUM);
    }
    return Number(input);
  },
};

export default InputValidator;
