import { NUMBER } from '../Constant/NUMBER';
import { ERROR_MESSAGE } from '../Constant/ERROR_MESSAGE';

/**
 * ERROR
 * - 0 ~ 9 범위를 벗어난 경우
 * - 숫자가 아닌 경우
 */
export const verifyRandomNumber = async (randomNumber) => {
  if (!Number(randomNumber)) throw new Error(ERROR_MESSAGE.ERROR_NOT_NUMBER);
  if (Number(randomNumber) <= NUMBER.MIN || Number(randomNumber) > NUMBER.MAX) throw new Error(ERROR_MESSAGE.ERROR_OUT_OF_RANGE);
};

