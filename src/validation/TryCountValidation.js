import { ERROR } from '../constants.js';

export default (count) => {
  // 빈 값이면 에러
  if (!count) throw new Error(ERROR.EMPTY_COUNT);
  if (count <= 0) throw new Error(ERROR.MUST_ENTER_A_NUMBER_OVER_ZERO);
};
