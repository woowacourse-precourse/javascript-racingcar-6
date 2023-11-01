import { MAX_CARNAME_LENGTH } from '../constants/conditions';
import { NO_LENGTH } from '../constants/constants';
import { ERROR_MESSAGE } from '../constants/messages';

function removeSpace(answer) {
  return answer.replace(/\s/g, '');
}

function isValidateCarName(answer) {
  const carNameList = removeSpace(answer).split(',');
  if (
    !carNameList.every(
      (name) => name.length > NO_LENGTH && name.length <= MAX_CARNAME_LENGTH,
    )
  ) {
    throw new Error(ERROR_MESSAGE.carName);
  }
  if (carNameList.length !== new Set(carNameList).size) {
    throw new Error(ERROR_MESSAGE.duplicatedCarName);
  }
  return true;
}

function isValidateAttemps(answer) {
  const attemps = removeSpace(answer);
  if (Number.isNaN(Number(attemps)) || attemps.length === NO_LENGTH) {
    throw new Error(ERROR_MESSAGE.attemps);
  }
  return true;
}

export { isValidateCarName, isValidateAttemps };
