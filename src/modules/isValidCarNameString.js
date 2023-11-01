import { NUMBER, CHAR } from '../constant/constants';

const hasNotBlank = (stringArr) => {
  const noneBlank = stringArr.every((elem) => !elem.includes(CHAR.BLANK));

  return noneBlank;
};

const isValidLength = (stringArr) => {
  const isInOfRange = stringArr.every((elem) => {
    const greaterThanZero = elem.length > NUMBER.ZERO;
    const maxLengthOrLess = elem.length <= NUMBER.MAX_NAME_LENGTH;
    const isValid = greaterThanZero && maxLengthOrLess;

    return isValid;
  });

  return isInOfRange;
};

const isUnique = (stringArr) => {
  const carNameSet = new Set(stringArr);
  const isUniqueNames = carNameSet.size === stringArr.length;

  return isUniqueNames;
};

const isValidCarNameString = (string) => {
  const splitArray = string.split(CHAR.SEPARATOR);
  const isValid = hasNotBlank(splitArray) && isValidLength(splitArray) && isUnique(splitArray);

  return isValid;
};

export default isValidCarNameString;
