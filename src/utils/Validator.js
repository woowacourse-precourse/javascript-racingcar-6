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
      throw new CustomError.RacingGame(ERROR.message.duplicateCarName);
  },

  validateUserInput(name) {
    if (this.isEmptyString(name)) {
      throw CustomError.InputView(ERROR.message.emptyString);
    }
  },

  validateInteger(number) {
    const isInteger = Number.isInteger(Number(number));

    if (!isInteger) {
      throw CustomError.InputView(ERROR.message.invalidInteger);
    }
  },

  validateCarName(carName) {
    const isvalidLength = this.isValidCarNameLength(carName);

    if (!isvalidLength) {
      throw CustomError.Car(ERROR.message.invalidCarNameLength);
    }
  },

  validateRound(round) {
    this.validateInteger(round);

    if (Number(round) < RACING_GAME.round.min) {
      throw CustomError.InputView(ERROR.message.invalidRound);
    }
  },
};

export default Validator;
