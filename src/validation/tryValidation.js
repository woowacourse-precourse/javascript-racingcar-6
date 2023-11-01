import { ERROR_MESSAGE } from "../constants/constant.js";

export const vaildTryCount = (count) => {
  if (isNaN(count)) throw new Error(`[ERROR] ${ERROR_MESSAGE.NOT_NUMBER}`);
  if (count <= 0) throw new Error(`[ERROR] ${ERROR_MESSAGE.DOWN1_COUNT}`);
  if (Math.floor(count) !== count)
    throw new Error(`[ERROR] ${ERROR_MESSAGE.DEMICAL}`);
  return count;
};
