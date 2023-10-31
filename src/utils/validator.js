import { Random } from '@woowacourse/mission-utils';

const hasNoSpace = value => {
  return !value.includes(' ');
};

const isNotEmpty = value => value.length !== 0;

const isUnderMaxLength = (value, maxLength) => value.length <= maxLength;

export const isCarListValid = (
  carList,
  maxCarListLength,
  minCarListLength,
  maxCarnameLength,
) => {
  if (carList.length > maxCarListLength || carList.length < minCarListLength) {
    return false;
  }
  return carList.every(
    car =>
      hasNoSpace(car) &&
      isNotEmpty(car) &&
      isUnderMaxLength(car, maxCarnameLength),
  );
};

const checkUnderTen = /^(10|[1-9])$/;

export const isRacingAttemptsValid = attemptTimes => {
  if (checkUnderTen.test(attemptTimes) && hasNoSpace(attemptTimes)) {
    return true;
  }
  return false;
};

export const canMoveForward = (
  minFowardNumber,
  minRandomNumber,
  maxRandomNumber,
) => {
  const randomNumber = Random.pickNumberInRange(
    minRandomNumber,
    maxRandomNumber,
  );

  if (randomNumber >= minFowardNumber) {
    return true;
  }
  return false;
};
