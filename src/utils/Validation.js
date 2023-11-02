import { ERRMSG, SIGN, VALUE } from '../constants/constants.js';

const checkLessThanFive = (list) => {
  if (list.some((carName) => carName.length > VALUE.LIMIT_LEETER_LEN)) {
    throw new Error(ERRMSG.OVER_FIVE_LETTER);
  }
};

const checkDuplicated = (list) => {
  if (new Set(list).size !== list.length) {
    throw new Error(ERRMSG.DUPLICATED_NAME);
  }
};

const checkHasSpace = (list) => {
  const str = list.join(SIGN.EMPTY_SPACE);
  if (
    str !== str.replace(SIGN.REGEXP_REMOVE_SPACE, SIGN.EMPTY_SPACE) ||
    str === ''
  ) {
    throw new Error(ERRMSG.HAS_SPACE);
  }
};

const checkNullName = (list) => {
  if(list.some((carName) => !carName.length)){
    throw new Error('[ERROR]');
  }
};

export const checkValidCarsName = (list) => {
  checkDuplicated(list);
  checkLessThanFive(list);
  checkHasSpace(list);
  checkNullName(list);
};

export const checkValidNumber = (num) => {
  if (isNaN(num) || Number(num) <= SIGN.MIN_REPEAT_NUMBER) {
    throw new Error(ERRMSG.NOT_VALID_NUMBER);
  }
};
