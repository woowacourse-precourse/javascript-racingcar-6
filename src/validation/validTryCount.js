import ERROR_MESSAGE from '../constants/constants.js';

const validTryCount = (tryCount) => {
  if (!Number.isInteger(Number(tryCount)) || tryCount < 1) {
    throw new Error(ERROR_MESSAGE.wrongTryCount);
  }
  return tryCount;
};

export default validTryCount;
