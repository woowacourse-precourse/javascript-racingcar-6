import { ERROR_MSG } from "../constants/messages.js";

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
    // NOTE
    // 특수문자, 숫자, 한글, 등 더 처리할 예외가 있을까?
  },

  carNameValidCheck(input) {
    const splitInput = input.split(",");
    this.isValidLength(splitInput);
    this.isDuplicated(splitInput);
    this.isValidType(splitInput);
  },
};

export default validation;
