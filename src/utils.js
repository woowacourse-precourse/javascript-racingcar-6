import { CAR_NAME_INPUT_SEPARATOR, MAX_LENGTH_FOR_CAR_NAME } from './data.js';
import { ERROR } from './messages.js';

function isEveryCarNamesUnique(carNamesArray) {
  const carNamesSet = new Set(carNamesArray);

  return carNamesSet.size === carNamesArray.length;
}

function isValidCarNames(carNamesString) {
  const carNamesArray = carNamesString.split(CAR_NAME_INPUT_SEPARATOR);

  for (const carName of carNamesArray) {
    if (
      carName.startsWith(' ') ||
      carName.endsWith(' ') ||
      carName.length === 0
    ) {
      throw new Error(ERROR.START_OR_END_WITH_SPACE);
    }

    if (carName.length > MAX_LENGTH_FOR_CAR_NAME)
      throw new Error(ERROR.TOO_LONG_NAME);
  }

  if (!isEveryCarNamesUnique(carNamesArray)) {
    throw new Error(ERROR.DUPLICATED_NAME);
  }

  return true;
}

function isValidMoveChanceCount(moveChanceCountString) {
  const moveChanceCountNumber = Number(moveChanceCountString);

  if (
    moveChanceCountString.trim().length === 0 ||
    Number.isNaN(moveChanceCountNumber)
  ) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  if (
    Number.isInteger(moveChanceCountNumber) === false ||
    moveChanceCountString.includes('e')
  ) {
    throw new Error(ERROR.NOT_INTEGER);
  }

  if (moveChanceCountNumber < 0 || moveChanceCountString === '-0') {
    throw new Error(ERROR.NOT_POSITIVE);
  }

  return true;
}

export { isValidCarNames, isValidMoveChanceCount };
