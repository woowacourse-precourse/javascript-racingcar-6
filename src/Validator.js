import { ERROR, GAME } from './Constant.js';
import CustomError from './CustomError.js';

const Validator = {
  validateCarNames(carNames) {
    if (!this.isValidLength(carNames)) {
      throw new CustomError(ERROR.CAR_NAME_INVALID_LENGTH);
    }

    if (this.isDuplicated(carNames)) {
      throw new CustomError(ERROR.CAR_NAME_DUPLICATED);
    }

    if (!this.areEnough(carNames)) {
      throw new CustomError(ERROR.CAR_NAME_NOT_ENOUGH);
    }
  },

  isValidLength(carNames) {
    return carNames.every(
      (car) =>
        car.length >= GAME.MIN_CAR_NAME_LENGTH &&
        car.length <= GAME.MAX_CAR_NAME_LENGTH
    );
  },

  areEnough(carNames) {
    return carNames.length >= GAME.MIN_CAR_NUMBER_TO_RACE;
  },

  isDuplicated(carNames) {
    return new Set(carNames).size !== carNames.length;
  },

  validateTryCount(tryString) {
    const tryNumber = Number(tryString);
    if (Number.isNaN(tryNumber)) {
      throw new CustomError(ERROR.TRY_COUNT_NOT_A_NUMBER);
    }
    if (tryNumber <= 0) {
      throw new CustomError(ERROR.TRY_COUNT_NOT_POSITIVE);
    }
  },
};

export default Validator;
