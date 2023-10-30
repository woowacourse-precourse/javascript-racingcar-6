import ERROR_MESSAGE from '../constants/constants';

const validTryCount = (tryCount) => {
  if (!Number.isInteger(tryCount) || tryCount < 1) {
    throw new Error(ERROR_MESSAGE.wrongTryCount);
  }
  return tryCount;
};

export default validTryCount;
