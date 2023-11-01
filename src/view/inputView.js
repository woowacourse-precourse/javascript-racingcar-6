import { Console } from '@woowacourse/mission-utils';
import { throwError } from '../common/utils.js'
import { isValidCarName, isValidTryCount } from '../common/validator.js';
import { LOG_MESSAGE, ERROR_MESSAGE } from '../common/constants.js';

export const getUserInputCarName = async () => {
  const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_CAR_NAME); 
  if (!input) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }
  if (!isValidCarName(input)) {
    throwError(ERROR_MESSAGE.INVALID_CAR_NAME);
  }
  return input;
}

export const getUserInputTryCount = async () => {
  const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_TRY_COUNT);
  if (!input) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }
  if (!isValidTryCount(input)) {
    throwError(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
  return input;
}
