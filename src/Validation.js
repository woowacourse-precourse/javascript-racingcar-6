import { Message, Sign, Value } from "./constants/constants.js";

const checkLessThanFive = (list) => {
  if (list.some((carName) => carName.length > Value.LIMIT_LEETER_LEN)) {
    throw new Error(Message.ERROR_OVER_FIVE_LETTER);
  }
}

const checkDuplicated = (list) => {
  if (new Set(list).size !== list.length) {
    throw new Error(Message.ERROR_DUPLICATED_NAME);
  }
}

const checkHasSpace = (list) => {
  const str = list.join(Sign.EMPTY_SPACE);
  if (str !== str.replace(Sign.REGEXP_REMOVE_SPACE, Sign.EMPTY_SPACE) || str === '') {
    throw new Error(Message.ERORR_HAS_SPACE);
  }
}

export const checkValidCarsName = (list) => {
  checkDuplicated(list);
  checkLessThanFive(list);
  checkHasSpace(list);
}

export const checkValidNumber = (num) => {
  if (isNaN(num) || num <= '0') {
    throw new Error(Message.ERROR_NOT_VALID_NUMBER);
  }
}