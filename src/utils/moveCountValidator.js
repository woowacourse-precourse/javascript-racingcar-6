import { strToNum } from './typeConvertor'
import { ERROR_MESSAGE } from '../constants/message';

export const isNumber = (num) => {
  if(!num) throw new Error(ERROR_MESSAGE.NUMBER);
}

export const isInt = (num) => {
  const result =  num % 1 === 0;
  if(!result) throw new Error(ERROR_MESSAGE.INT);
}

export const isNegative = (num) => {
  if( num < 0 ) throw new Error(ERROR_MESSAGE.NEGATIVE); 
}

export const validateMoveCount = (input) => {
  const number = strToNum(input);
  isNumber(number);
  isInt(number);
  isNegative(number);
}


