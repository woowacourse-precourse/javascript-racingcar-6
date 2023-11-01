import { ERROR_MESSAGE, GAME_INT } from '../constants/constants';

const validateCarNames = (carNames) => {
  if (carNames == '') {
  }
  let parsedName = carNames.split(',');

  parsedName.forEach((name) => {
    if (name.length < 1 || name.length > GAME_INT.MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
  });

  const set = new Set(parsedName);
  if (set.size !== parsedName.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATION);
  }

  const ALPHA_REGEXP = /^[a-z|A-Z]+$/;
  parsedName.forEach((name) => {
    if (!ALPHA_REGEXP.test(name))
      throw new Error('[ERROR] 알파벳만 입력하세요');
  });
};

const validateAttemptNumber = (attemptNumber) => {
  const NUMBER_REGEXP = /^[0-9]+$/;
  if (!NUMBER_REGEXP.test(attemptNumber))
    throw new Error('[ERROR] 자연수만 입력하세요');

  if (Number(attemptNumber) <= 0)
    throw new Error('[ERROR] 자연수만 입력하세요');
};

export { validateCarNames, validateAttemptNumber };
