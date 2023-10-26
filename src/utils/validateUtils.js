import { ERROR_MESSAGES, GAME_NUMBERS } from './constants.js';

function validateCarName(name) {
  if (name.length > GAME_NUMBERS.carNameMaxLength) {
    throw new Error(ERROR_MESSAGES.invalidCarNameLength);
  }
}

function validateRoundsNumber(roundsNumber) {
  if (isNaN(roundsNumber)) {
    throw new Error(ERROR_MESSAGES.invalidMovementCountNumber);
  }
  if (roundsNumber < 0) {
    throw new Error(ERROR_MESSAGES.invalidMovementCountNumber);
  }
}

export { validateCarName, validateRoundsNumber };
