import { ERROR_MESSAGE } from '../constants/message.js';
import { CAR_NAME, TOTAL_ROUND_MIN_COUNT } from '../constants/racingGame.js';

const Validation = {
  validateCarNames(carNames) {
    if (!carNames.every((carName) => carName.length <= CAR_NAME.LENGTH_LIMIT)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_LIMIT);
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);
    }

    if (!carNames.every((carName) => carName.trim() !== '')) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_EMPTY);
    }

    if (!carNames.every((carName) => !/\s/.test(carName))) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_INCLUDE_EMPTY);
    }
  },

  validateTotalRounds(totalRoundsString) {
    if (!/^[0-9]+$/.test(totalRoundsString) || Number(totalRoundsString) < TOTAL_ROUND_MIN_COUNT) {
      throw new Error(ERROR_MESSAGE.TOTAL_ROUNDS_INVALID);
    }
  },
};

export default Validation;
