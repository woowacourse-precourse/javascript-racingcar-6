import { ERROR_MESSAGE } from '../constants/message.js';

const validation = {
  checkNameLength(inputArr) {
    inputArr.forEach((carName) => {
      if (carName.length > 5 || carName.length === 0) {
        throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
      }
    });
  },

  checkNameDuplication(inputArr) {
    const duplicatedArr = [];
    inputArr.forEach((input) => {
      if (duplicatedArr.includes(input)) {
        throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      }
      duplicatedArr.push(input);
    });
  },

  validateCarNames(splitInput) {
    this.checkNameLength(splitInput);
    this.checkNameDuplication(splitInput);
  },
};

export default validation;
