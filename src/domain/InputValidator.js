import { MESSAGE } from '../constants/messages';
import { GAME_CONDITION } from '../constants/constants';

const InputValidator = {
  isNumeric(input) {
    const numberRegExp = /^\d+$/;
    return numberRegExp.test(input);
  },

  isValidMinCars(count) {
    return this.isNumeric(count) && count >= GAME_CONDITION.minCars;
  },

  isValidLengthName(name) {
    return name.length >= GAME_CONDITION.minLength && name.length <= GAME_CONDITION.maxLength;
  },

  isValidUniqueName(carNames) {
    return new Set(carNames).size === carNames.length;
  },

  isValidMinRound(round) {
    return this.isNumeric(round) && round >= GAME_CONDITION.minRound;
  },

  validateCarNames(carNames) {
    if (!this.isValidUniqueName(carNames)) throw new Error(MESSAGE.uniqueName);

    if (carNames.some((name) => !this.isValidLengthName(name))) throw new Error(MESSAGE.lengthName);

    if (!this.isValidMinCars(carNames.length)) throw new Error(MESSAGE.minCars);
  },

  validateRound(round) {
    if (!this.isValidMinRound(round)) throw new Error(MESSAGE.minRound);
  },
};

export default InputValidator;
