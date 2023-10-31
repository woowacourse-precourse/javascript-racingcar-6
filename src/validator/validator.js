import MESSAGE from '../constants/constant';

const validator = {
  validateCarName(carNames) {
    carNames.forEach((carName) => {
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
  },
};

export default validator;
