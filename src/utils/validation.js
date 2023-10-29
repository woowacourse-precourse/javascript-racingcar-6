import { ERROR_MSG } from "../constants/messages.js";
import { NUM_REGEXP, MOVE_MAX } from "../constants/numConstants.js";

const validation = {
  isValidLength(inputArr) {
    for (const el of inputArr) {
      if (el.length > 5 || el.length === 0)
        throw new Error(ERROR_MSG.INVALID_CAR_NAME_LENGTH);
    }
    return 0;
  },

  isDuplicated(inputArr) {
    if (new Set(inputArr).size !== inputArr.length)
      throw new Error(ERROR_MSG.DUPLICATED_CAR_NAME);
    return 0;
  },

  isValidType(inputArr) {
    // NOTE 특수문자, 숫자, 한글, 등 더 처리할 예외가 있을까?
    // 공백을 어떻게 처리할지 고민 필요
  },

  carNameValidCheck(input) {
    const splitInput = input.split(",");
    this.isValidLength(splitInput);
    this.isDuplicated(splitInput);
    this.isValidType(splitInput);
  },

  isNumber(input) {
    if (!NUM_REGEXP.test(input)) throw new Error(ERROR_MSG.INVALID_MOVE_COUNT);
    return 0;
  },

  isTooBig(input) {
    // NOTE 너무 큰 숫자가 들어올 경우 에러 처리 (임의로 MAX는 2,147,483,647로 함)
    if (input <= 0 || parseInt(input) > MOVE_MAX)
      throw new Error(ERROR_MSG.TOO_BIG_MOVE_COUNT);
    return 0;
  },

  moveCountValidCheck(input) {
    this.isNumber(input);
    this.isTooBig(input);
  },
};

export default validation;
