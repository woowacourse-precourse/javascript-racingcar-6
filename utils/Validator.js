import CONSTANTS from './Constants';
import MESSAGES from './Messages';

const Validator = {
  validateCarNames(carNamesArray) {
    if (carNamesArray.some((car) => car.length > CONSTANTS.maxNameLength))
      throw new Error(MESSAGES.invalidNameLength);
  },
};

export default Validator;
