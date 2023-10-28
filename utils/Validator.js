import CONSTANTS from './Constants';
import MESSAGES from './Messages';

const Validator = {
  validateCarNames(carNames) {
    const carNamesArray = carNames.split(CONSTANTS.delimeter);
    if (carNamesArray.some((car) => car.length > CONSTANTS.maxNameLength))
      throw new Error(MESSAGES.invalidNameLength);
  },
};

export default Validator;
