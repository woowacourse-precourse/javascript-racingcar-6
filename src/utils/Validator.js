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

  validateDuplicatedCarName(carNames) {
    const carNameSet = new Set(carNames);

    if (carNames.length !== carNameSet.size)
      throw CustomError.RacingGame(ERROR.message.duplicateCarName);
  },

  validateRound(round) {
    this.validateInteger(round);

    if (Number(round) < RACING_GAME.round.min) {
      throw CustomError.RacingGame(ERROR.message.invalidRound);
    }
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
};

export default Validator;
