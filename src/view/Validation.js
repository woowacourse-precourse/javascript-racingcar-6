import { ERROR } from '../constants/constants.js';

const Validation = {
  hasSpace: (carNames) => {
    carNames.forEach((carName) => {
      if (carName.includes(' ')) {
        throw new Error(ERROR.space);
      }
    });
  },

  isMoreThanFiveLetters: (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.moreThanFiveLetters);
      }
    });
  },

  hasSpecialChar: (carNames) => {
    carNames.forEach((carName) => {
      if (carName.match(/[^a-zA-Z0-9가-힣]/)) {
        throw new Error(ERROR.specialChar);
      }
    });
  },

  hasEmptyName: (carNames) => {
    carNames.forEach((carName) => {
      if (carName === '') {
        throw new Error(ERROR.empty);
      }
    });
  },

  hasDuplicateName: (carNames) => {
    const set = new Set(carNames);
    if (set.size !== carNames.length) {
      throw new Error(ERROR.duplicate);
    }
  },
};

const validation = (carNames) => {
  Validation.hasSpace(carNames);
  Validation.isMoreThanFiveLetters(carNames);
  Validation.hasSpecialChar(carNames);
  Validation.hasEmptyName(carNames);
  Validation.hasDuplicateName(carNames);
};

export default validation;
