import { ERROR } from '../constants/constants.js';

const isCarNameValidLength = (car) => {
  if (car.length <= 5) {
    return true;
  }
  return false;
};

const isRaceCountValidNumber = (raceCount) => {
  return !Number.isNaN(parseInt(raceCount));
};

export { isCarNameValidLength, isRaceCountValidNumber };
