import { COMMA } from "./Constant.js";
import Message from "./Message.js";

const CheckInputValidation = {
  CarNames(input) {
    // 이름을 ,로 구분 안 한 경우
    if (!input.includes(COMMA)) {
      throw new Error(Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA);
    }
    const carNames = input.split(COMMA);
    return carNames;
  },
};

export default CheckInputValidation;
