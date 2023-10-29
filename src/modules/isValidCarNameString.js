const MAX_NAME_LENGTH = 5;
const ZERO = 0;

const carNameSet = new Set();

const hasNotBlank = (string) => {
  return !string.includes(' ');
};

const isValidLength = (string) => {
  const greaterThanZero = string.length > ZERO;
  const maxLengthOrLess = string.length <= MAX_NAME_LENGTH;
  const isValid = greaterThanZero && maxLengthOrLess;

  return isValid;
};

const isUnique = (string) => {
  const hasSet = carNameSet.has(string);

  if (hasSet) {
    return false;
  }

  carNameSet.add(string);
  return true;
};

const isValidCarName = (string) => {
  const isValid = hasNotBlank(string) && isValidLength(string) && isUnique(string);
  return isValid;
};

const isValidCarNameString = (string) => {
  const splitArray = string.split(',');
  const isValid = splitArray.every(isValidCarName);

  return isValid;
};

export default isValidCarNameString;
