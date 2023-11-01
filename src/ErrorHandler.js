import Data from './Data.js';
import { RACING_GAME, ERROR, REGEXP } from './Constant.js';

const ErrorHandler = {
  carNamesType(carNames) {
    if (carNames.indexOf(RACING_GAME.delimiter) === -1
    || carNames.indexOf(RACING_GAME.delimiter) === carNames.length - 1) {
      throw new Error(ERROR.delimiterType);
    }

    const refinedCarNames = new Data().carNamesTypeConversion(carNames);

    if (refinedCarNames.some((car) => car.trim() === '')) {
      throw new Error(ERROR.nameEmpty);
    }
    if (refinedCarNames.some((car) => car.length > RACING_GAME.nameMaxLength)) {
      throw new Error(ERROR.nameLength);
    }
    if (new Set(refinedCarNames).size !== refinedCarNames.length) {
      throw new Error(ERROR.nameOverlap);
    }
  },

  countType(count) {
    const isNotNumber = REGEXP.IS_NOT_NUMBER;

    if (isNotNumber.test(count)) {
      throw new Error(ERROR.countType);
    }

    if (Number(count) === 0) {
      throw new Error(ERROR.countRange);
    }
  },
};

export default ErrorHandler;
