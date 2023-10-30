import { ERROR } from './Constants.js';

const Validation = {
  validCarNameLength(userInput) {
    const elements = userInput.split(',');
    if (!elements.every((element) => element.length <= 5)) throw new Error(ERROR.CAR_NAME_LENGTH);
  },
};
export default Validation;
