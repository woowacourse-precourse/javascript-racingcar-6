import { MESSAGE } from '../constants/messages.js';
import { GAME_CONDITION } from '../constants/constants.js';

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

  /**
   * 중복되지 않는 이름, 각 이름의 유효한 글자 수, 이름의 갯수를 검증한다.
   * @param {string[]} carNames
   */
  validateCarNames(carNames) {
    if (!this.isValidUniqueName(carNames)) throw new Error(MESSAGE.uniqueName);

    if (carNames.some((name) => !this.isValidLengthName(name))) throw new Error(MESSAGE.lengthName);

    if (!this.isValidMinCars(carNames.length)) throw new Error(MESSAGE.minCars);
  },

  /**
   * 숫자타입인지, 최소 1이상인지 검증한다.
   * @param {number} round
   */
  validateRound(round) {
    if (!this.isValidMinRound(round)) throw new Error(MESSAGE.minRound);
  },
};

export default InputValidator;
