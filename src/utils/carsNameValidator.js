import { ERROR_MESSAGE } from '../constants/message';
import { CARNAME_LENGTH, REGEXP_A_Z, REGEXP_BLANK } from '../constants/constants';
import { strToStrArr } from './typeConvertor';

export const isLowerCase = (strArr) => {
  const result = strArr.every(str => {
    if(!REGEXP_A_Z.test(str)) return false;
    return true;
  })
  if(!result) throw new Error(ERROR_MESSAGE.LOWERCASE);
}

export const isLenFive = (strArr) => {
  const result = strArr.every(str => str.length <= CARNAME_LENGTH);
  if(!result) throw new Error(ERROR_MESSAGE.LENFIVE);
}

export const isUnique = (strArr) => {
  const uniqueArr = new Set(strArr);
  const result = strArr.length === uniqueArr.size;
  if(!result) throw new Error(ERROR_MESSAGE.UNIQUE);
}

export const isBlankIncluded = (str) => {
  if(REGEXP_BLANK.test(str)) throw new Error(ERROR_MESSAGE.BLANK);
}

export const validateCarsName = (input) => {
  const strArr = strToStrArr(input);
  isBlankIncluded(input);
  isLowerCase(strArr);
  isLenFive(strArr);
  isUnique(strArr);
}