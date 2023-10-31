import CAR from '../constants/car.js';
import ERROR from '../constants/error.js';
import RACING_GAME from '../constants/racingGame.js';
import CustomError from '../errors/error.js';

const Validator = {
  isEmptyString(string) {
    return string === ERROR.errorCase.emptyString;
  },

  isValidCarNameLength(name) {
    return (
      name.length >= CAR.name.minLength && name.length <= CAR.name.maxLength
    );
  },

  isDuplicateCarName(carNames) {
    const carNameSet = new Set(carNames);
    if (carNames.length !== carNameSet.size)
      throw CustomError.InputView(ERROR.message.duplicateCarName);
  },

  validateUserInput(name) {
    if (this.isEmptyString(name)) {
      throw CustomError.InputView(ERROR.message.emptyString);
    }
  },

  validateCarName(carName) {
    const isvalidLength = this.isValidCarNameLength(carName);

    if (!isvalidLength) {
      throw CustomError.Car(ERROR.message.invalidCarNameLength);
    }
  },

  validateRound(round) {
    const isPositiveInteger =
      Number.isInteger(Number(round)) && round >= RACING_GAME.round.min;

    if (!isPositiveInteger) {
      throw CustomError.InputView(ERROR.message.invalidRound);
    }
  },
};

export default Validator;
