import { ERROR_MESSAGE, GAME_INT } from '../constants/constants';

const validateCarNames = (carNames) => {
  carNames.forEach((name) => {
    if (name.trim().length < 1 || name.trim().length > GAME_INT.MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
  });

  const set = new Set(carNames);
  if (set.size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
};

const validateAttemptNumber = (attemptNumber) => {
  if (isNaN(attemptNumber) || attemptNumber < 1) {
    throw new Error(ERROR_MESSAGE.NATURAL_NUMBER);
  }
};

export { validateCarNames, validateAttemptNumber };
