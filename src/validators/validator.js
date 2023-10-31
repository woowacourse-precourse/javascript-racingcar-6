import { REG_EXP } from '../constants/constants';
import { ERROR_MESSAGE } from '../constants/messages';
import CustomError from '../errors/CustomError';

export const carNameValidator = (carNames) => {
  hasDuplicateCarName(carNames);
  isValidCarName(carNames);
};

export const tryCountValidator = (round) => {
  isValidRound(round);
};

export const hasDuplicateCarName = (carNames) => {
  const carNameSet = new Set(carNames);

  if (carNames.length !== carNameSet.size) {
    throw new CustomError(ERROR_MESSAGE.duplicateCarName);
  }
};

export const isValidCarName = (carNames) => {
  carNames.forEach(carName => {
    if (!REG_EXP.carName.test(carName)) {
      throw new CustomError(ERROR_MESSAGE.invalidCarName);
    }
  });
};

export const isValidRound = (round) => {
  if (!REG_EXP.round.test(round)) {
    throw new CustomError(ERROR_MESSAGE.invalidTrycount);
  }
};
