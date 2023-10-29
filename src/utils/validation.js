import {ERROR} from "../constants/message.js";
import SETTING from "../constants/setting.js"; //이름 검사

//이름 검사
export const isNameLengthUnderFive = (name) => {
  if (name.length > 5) throw new Error(ERROR.INVALID_NAME_LENGTH);
};

export const hasSameName = (input) => {
  const carsArr = input.split(",");
  const uniqueNames = [...new Set(carsArr)];
  if (carsArr.length !== uniqueNames.length)
    throw new Error(ERROR.HAVE_SAME_NAME);
};

export const isValidNameInput = (input) => {
  if (!input) throw new Error(ERROR.TOO_FEW_NAME(SETTING.MIN_NAME_NUM));

  const carsArr = input.split(",");

  if (carsArr.length > SETTING.MAX_NAME_NUM)
    throw new Error(ERROR.TOO_MANY_NAMES(SETTING.MAX_NAME_NUM));

  if (carsArr.length < SETTING.MIN_NAME_NUM)
    throw new Error(ERROR.TOO_FEW_NAME(SETTING.MIN_NAME_NUM));
};

//횟수 검사
export const isValidCountInput = (input) => {
  if (!input) throw new Error(ERROR.INVALID_COUNT_RANGE);

  const numInput = Number.isInteger(input);

  if (numInput < SETTING.MIN_COUNT_NUM)
    throw new Error(ERROR.INVALID_COUNT_RANGE);

  if (numInput > 30)
    throw new Error(ERROR.TOO_MANY_COUNT(SETTING.MAX_COUNT_NUM));
};
