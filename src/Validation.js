import { ERROR } from './Constants.js';

const Validation = {
  validateCarName(userInput) {
    this.validCarNameLength(userInput);
    this.validateCarNameAlphabetic(userInput);
    this.validateCarNameDuplicate(userInput);
  },

  validCarNameLength(userInput) {
    const elements = userInput.split(',');
    if (!elements.every((element) => element.length <= 5)) throw new Error(ERROR.CAR_NAME_LENGTH);
  },

  validateCarNameAlphabetic(userInput) {
    const alphabeticRegex = /^[a-zA-Z]+$/;

    const elements = userInput.split(',');
    if (!elements.every((element) => alphabeticRegex.test(element))) {
      throw new Error(ERROR.CAR_NAME_TYPE);
    }
  },

  validateCarNameDuplicate(userInput) {
    const CarNames = userInput.split(',');
    const uniqueCarNames = new Set(CarNames);

    if (uniqueCarNames.size !== CarNames.length) {
      throw new Error(ERROR.CAR_NAME_DUPLICATE);
    }
  },
};
export default Validation;
