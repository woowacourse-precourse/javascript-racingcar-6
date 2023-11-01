import { ERROR_MESSAGE } from '../Constant/ERROR_MESSAGE';

/**
 * ERROR
 * - 0보다 작은 경우
 * - 숫자가 아닌 경우
 */
export const verifyAttempt = async (attempt) => {
  if (!Number(attempt)) throw new Error(ERROR_MESSAGE.ERROR_NOT_NUMBER);
  if (Number(attempt) <= 0) throw new Error(ERROR_MESSAGE.ERROR_LESS_THAN_ZERO);
};

