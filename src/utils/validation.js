import {ERROR_MESSAGE} from "../constants/message.js";
import SETTING from "../constants/setting.js"; //이름 검사
//이름 검사
export const isNameLengthUnderFive = (name) => {
  if (name.length > 5) throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
};

export const hasSameName = (carsArr) => {
  // const carsArr = input.split(",");
  const uniqueNames = [...new Set(carsArr)];
  if (carsArr.length !== uniqueNames.length)
    throw new Error(ERROR_MESSAGE.HAVE_SAME_NAME);
};
export const isValidNameInput = (carsArr) => {
  // if (!input) throw new Error(ERROR_MESSAGE.TOO_FEW_NAME(SETTING.MIN_NAME_NUM));
  //
  // const carsArr = input.split(",");

  if (carsArr.length > SETTING.MAX_NAME_NUM)
    throw new Error(ERROR_MESSAGE.TOO_MANY_NAMES(SETTING.MAX_NAME_NUM));

  if (carsArr.length < SETTING.MIN_NAME_NUM)
    throw new Error(ERROR_MESSAGE.TOO_FEW_NAME(SETTING.MIN_NAME_NUM));
};

export const isNoInput = (input) => {
  if (!input) throw new Error(ERROR_MESSAGE.NO_INPUT);
};
//횟수 검사
export const isValidCountInput = (count) => {
  if (count < SETTING.MIN_COUNT_NUM || isNaN(count))
    throw new Error(ERROR_MESSAGE.INVALID_COUNT_RANGE);

  if (count > 30)
    throw new Error(ERROR_MESSAGE.TOO_MANY_COUNT(SETTING.MAX_COUNT_NUM));
};

export const isIntegerNumber = (count) => {
  const regex = /^\d+$/;
  if (!regex.test(count) || !Number.isInteger(count))
    throw new Error(ERROR_MESSAGE.INVALID_COUNT_RANGE);
};
