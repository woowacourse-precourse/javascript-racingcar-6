import { ERROR_MESSAGE } from "../constants/message.js";
import SETTING from "../constants/setting.js"; //이름 검사
//이름 검사
export const isNameLengthUnderFive = (name) => {
  if (name.length > 5) throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
};

export const hasSameName = (carsArr) => {
  const uniqueNames = [...new Set(carsArr)];
  if (carsArr.length !== uniqueNames.length)
    throw new Error(ERROR_MESSAGE.HAVE_SAME_NAME);
};
export const isValidNameInput = (carsArr) => {
  if (carsArr.length > SETTING.MAX_NAME_NUM)
    throw new Error(ERROR_MESSAGE.TOO_MANY_NAMES(SETTING.MAX_NAME_NUM));

  if (carsArr.length < 2) throw new Error(ERROR_MESSAGE.TOO_FEW_NAME);
};

export const isNoInput = (input) => {
  if (!input) throw new Error(ERROR_MESSAGE.NO_INPUT);
};
//횟수 검사
export const isValidRoundInput = (round) => {
  if (round < 1 || isNaN(round))
    throw new Error(ERROR_MESSAGE.INVALID_ROUND_RANGE);

  if (round > 30)
    throw new Error(ERROR_MESSAGE.TOO_MANY_ROUND(SETTING.MAX_COUNT_NUM));
};

export const isIntegerNumber = (round) => {
  const regex = /^\d+$/;
  if (!regex.test(round) || !Number.isInteger(round))
    throw new Error(ERROR_MESSAGE.INVALID_ROUND_RANGE);
};
