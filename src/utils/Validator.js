import { ERROR_MESSAGE } from '../constants/messages.js';

function removeSpace(answer) {
  return answer.replace(/\s/g, '');
}

function isValidateCarName(answer) {
  const carName = removeSpace(answer);
  if (
    !carName.split(',').every((name) => name.length > 0 && name.length <= 5)
  ) {
    throw new Error(ERROR_MESSAGE.carName);
  }
  return true;
}

function isValidateAttemps(answer) {
  const attemps = removeSpace(answer);
  if (Number.isNaN(Number(attemps)) || attemps.length === 0) {
    throw new Error(ERROR_MESSAGE.attemps);
  }
  return true;
}

export { isValidateCarName, isValidateAttemps };
