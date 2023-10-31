import { Random } from '@woowacourse/mission-utils';
import { MIN_FOWARD_NUMBER } from '../constants/constants';

export const hasNoSpace = value => {
  return !value.includes(' ');
};

export const isNotEmpty = value => value.length !== 0;

export const isUnderMaxLength = (value, maxLength) => value.length <= maxLength;

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
      hasNoSpace(car)
      && isNotEmpty(car)
      && isUnderMaxLength(car, maxCarnameLength),
  );
};

export const checkUnderTen = /^(10|[1-9])$/;

export const isRacingAttemptsValid = attemptTimes => {
  if (checkUnderTen.test(attemptTimes) && hasNoSpace(attemptTimes)) {
    return true;
  }
  return false;
};

export const canMoveForward = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber >= MIN_FOWARD_NUMBER) {
    return true;
  }
  return false;
};
