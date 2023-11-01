const hasNoSpace = value => {
  return !value.includes(' ');
};

const isNotEmpty = value => value.length !== 0;

const isUnderMaxLength = (value, maxLength) => value.length <= maxLength;

const checkUnderTen = /^(10|[1-9])$/;

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

export const isRacingAttemptsValid = attemptTimes => {
  if (checkUnderTen.test(attemptTimes) && hasNoSpace(attemptTimes)) {
    return true;
  }
  return false;
};
