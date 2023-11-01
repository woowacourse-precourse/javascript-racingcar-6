import { Console } from '@woowacourse/mission-utils';
import { ERROR_WRONG_NUMBER_FORM, ROUNDS_TO_PLAY } from '../Constants.js';

export const checkNumberValidity = (str) => {
  const condition = /^[0-9]+$/.test(str);
  return !!condition;
};

const askUserTotalRoundNumber = async () => {
  const input = await Console.readLineAsync(ROUNDS_TO_PLAY);
  return input;
};

const throwError = (msg) => {
  throw new Error(msg);
};

const getValidTotalRoundNumber = async () => {
  const totalRoundNumber = await askUserTotalRoundNumber();

  const isNumberValid = checkNumberValidity(totalRoundNumber);

  if (!isNumberValid) {
    throwError(ERROR_WRONG_NUMBER_FORM);
  }

  return parseInt(totalRoundNumber, 10);
};
export default getValidTotalRoundNumber;
