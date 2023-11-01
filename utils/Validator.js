import CONSTANTS from './Constants.js';
import MESSAGES from './Messages.js';

const Validator = {
  validateCarNames(carNamesArray) {
    if (carNamesArray.some((car) => car.length > CONSTANTS.maxNameLength))
      throw new Error(MESSAGES.invalidNameLength);
  },
  validateTrialCount(trialCount) {
    if (Number.isNaN(trialCount)) throw new Error(MESSAGES.invalidTrialCount);
    if (trialCount < 1) throw new Error(MESSAGES.invalidTrialCount);
    if (Math.floor(trialCount) !== trialCount) throw new Error(MESSAGES.invalidTrialCount);
  },
};

export default Validator;
