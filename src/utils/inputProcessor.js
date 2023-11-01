import { validateAttempts, validateCarNames } from './validator.js';

const InputProcessor = {
  async processCarNames(carNamesString) {
    return carNamesString.split(',').map((car) => validateCarNames(car));
  },

  async processAttempts(attemptsCountString) {
    return validateAttempts(attemptsCountString);
  },
};

export default InputProcessor;
