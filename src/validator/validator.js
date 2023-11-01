import MESSAGE from '../constants/constant.js';

const validator = {
  validateCarName(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error(MESSAGE.ERROR.CARNAME.DUPLICATE_ERROR);
    }
    carNames.forEach(carName => {
      if (carName.length > 5) {
        throw new Error(MESSAGE.ERROR.CARNAME.LENGTH_ERROR);
      }
      if (carName === '') {
        throw new Error(MESSAGE.ERROR.CARNAME.NULL_ERROR);
      }
    });
  },

  validateChance(number) {
    if (Number.isNaN(number)) {
      throw new Error(MESSAGE.ERROR.CHANCE.NUMBER_ERROR);
    }
    if (number <= 0) {
      throw new Error(MESSAGE.ERROR.CHANCE.OVER_ZERO_ERROR);
    }
    if (number === '') {
      throw new Error(MESSAGE.ERROR.CHANCE.NULL_ERROR);
    }
    if (number % 1 !== 0) {
      throw new Error('[ERROR]');
    }
  },
};

export default validator;
