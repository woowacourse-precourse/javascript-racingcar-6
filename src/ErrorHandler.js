import Data from './Data.js';
import { ERROR, REGEXP } from './Constant.js';

const ErrorHandler = {
  carNamesType(carNames) {
    if (carNames.indexOf(',') === -1 || carNames.indexOf(',') === carNames.length - 1) {
      throw new Error(ERROR.delimiterType);
    }

    const refinedCarNames = new Data().carNamesTypeConversion(carNames);

    if (refinedCarNames.some((car) => car.trim() === "")) {
      throw new Error(ERROR.nameEmpty);
    }
    if (refinedCarNames.some((car) => car.length >= 5)) {
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
  }
}

export default ErrorHandler;