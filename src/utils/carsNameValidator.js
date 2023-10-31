import { ERROR_MESSAGE } from '../constants/message';
import { CARNAME_LENGTH, REGEXP } from '../constants/constants';
import { strToStrArr } from './typeConvertor';

export const isLowerCase = (strArr) => {
  const result = strArr.every(str => {
    if(!REGEXP.test(str)) return false;
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

export const validateCarsName = (input) => {
  const strArr = strToStrArr(input);
  isLowerCase(strArr);
  isLenFive(strArr);
  isUnique(strArr);
}