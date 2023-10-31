import { ERROR_MSG } from '../constants/messages.js';
import { NUM_REGEXP, NUM } from '../constants/constants.js';

const validation = {
  isValidLength(inputArr) {
    inputArr.forEach((carName) => {
      if (carName.length > NUM.CAR_LENGTH_MAX || carName.length === 0)
        throw new Error(ERROR_MSG.INVALID_CAR_NAME_LENGTH);
    });
    return 0;
  },

  isDuplicated(inputArr) {
    if (new Set(inputArr).size !== inputArr.length)
      throw new Error(ERROR_MSG.DUPLICATED_CAR_NAME);
    return 0;
  },

  carNameValidCheck(splitInput) {
    this.isValidLength(splitInput);
    this.isDuplicated(splitInput);
  },

  isNumber(input) {
    if (!NUM_REGEXP.test(input)) throw new Error(ERROR_MSG.INVALID_MOVE_COUNT);
    return 0;
  },

  isTooBig(input) {
    // NOTE 너무 큰 숫자가 들어올 경우 에러 처리 (임의로 MAX는 Int 최대값 2,147,483,647로 함)
    if (input <= 0 || parseInt(input, 10) > NUM.MOVE_MAX)
      throw new Error(ERROR_MSG.TOO_BIG_MOVE_COUNT);
    return 0;
  },

  moveCountValidCheck(input) {
    this.isNumber(input);
    this.isTooBig(input);
  },
};

export default validation;
