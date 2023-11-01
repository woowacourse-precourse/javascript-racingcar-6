import { ERROR_MESSAGE, GAME_INT } from '../constants/constants';

const validateCarNames = (carNames) => {
  if (carNames.length === 0) throw new Error(ERROR_MESSAGE.INPUT);
  let parsedName = carNames.split(',');

  parsedName.forEach((name) => {
    if (name.trim().length < 1 || name.trim().length > GAME_INT.MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
  });

  const set = new Set(parsedName);
  if (set.size !== parsedName.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
};

const validateAttemptNumber = (attemptNumber) => {
  if (attemptNumber.length === 0) throw new Error(ERROR_MESSAGE.INPUT);
  if (isNaN(Number(attemptNumber)) || Number(attemptNumber) < 1) {
    throw new Error(ERROR_MESSAGE.NATURAL_NUMBER);
  }
};

export { validateCarNames, validateAttemptNumber };
