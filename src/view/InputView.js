import { Console } from '@woowacourse/mission-utils';
import throwError from '../common/utils/errorHandler.js';
import isValidCarName from '../common/utils/carNameValidator.js';
import isValidTryNumber from "../common/utils/tryNumberValidator.js";
import { LOG_MESSAGE, ERROR_MESSAGE } from '../common/utils/constants/message.js';

export const getUserInputCarName = async () => {
  const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_CAR_NAME); 
  if (!isValidCarName(input)) {
    throwError(ERROR_MESSAGE.INCORRECT_CAR_NAME);
  }
  return input;
}

export const getUserInputTryNumber = async () => {
  const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_TRY_NUMBER);
  if (!isValidTryNumber(input)) {
    throwError(ERROR_MESSAGE.INCORRECT_TRY_NUMBER);
  }
  return input;
}