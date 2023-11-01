import { Console } from '@woowacourse/mission-utils';
import {
  CAR_NAME_SPLIT_MARK,
  ENTER_CAR_NAME_LIST,
  ERROR_WRONG_CAR_NAMES,
  MAX_CAR_NAME_LENGTH,
} from '../Constants.js';

export const checkLengthLessThanGo = (str) => {
  const condition = str?.length <= MAX_CAR_NAME_LENGTH;
  return !!condition;
};

export const checkCarNameStrValidity = (carNameList) => {
  const conditionList = carNameList.map(checkLengthLessThanGo);
  const isFalseInCondition = conditionList.some((x) => !x);
  return !isFalseInCondition;
};

const askUserCarNameStr = async () => {
  const input = await Console.readLineAsync(ENTER_CAR_NAME_LIST);
  return input;
};

const throwError = (msg) => {
  throw new Error(msg);
};

const getValidCarNameStr = async () => {
  const carNameStr = await askUserCarNameStr();

  const carNameList = carNameStr.split(CAR_NAME_SPLIT_MARK);
  const iscarNameStrValid = checkCarNameStrValidity(carNameList);

  if (!iscarNameStrValid) {
    throwError(ERROR_WRONG_CAR_NAMES);
  }

  return carNameStr;
};
export default getValidCarNameStr;
