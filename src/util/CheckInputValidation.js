import Constant from "./Constant.js";
import Message from "./Message.js";

const CheckInputValidation = {
  CarNames(input) {
    // 이름을 , 로 구분 안 한 경우
    if (!input.includes(Constant.COMMA)) {
      throw new Error(Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA);
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
};

export default CheckInputValidation;
