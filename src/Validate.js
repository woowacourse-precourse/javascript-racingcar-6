import { ERROR } from './Constants.js';

function validateCarName(names) {
  validateNumberOfNames(names);

  names.forEach((carName) => {
    validateNameLength(carName);
    validateTypeOfName(carName);
  });

  validateDuplicateName(names);
}

function validateGameCount(count) {
  validateRangeOfCount(count);
  validateTypeOfCount(count);
}

function validateDuplicateName(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERROR.nameDuplicated);
  }
}

function validateNumberOfNames(names) {
  if (names.length < 2) {
    throw new Error(ERROR.invalidNumberOfNames);
  }
}

function validateNameLength(name) {
  if (name.length < 1 || name.length > 5) {
    throw new Error(ERROR.invalidNameLength);
  }
}

function validateTypeOfName(name) {
  const specialCharacterRegExp = /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/;
  if (specialCharacterRegExp.test(name)) {
    throw new Error(ERROR.invalidNameType);
  }
}

function validateRangeOfCount(count) {
  if (count < 1) {
    throw new Error(ERROR.invalidCountRange);
  }
}

function validateTypeOfCount(count) {
  const numberRegExp = /^[0-9]+$/;
  if (!numberRegExp.test(count)) {
    throw new Error(ERROR.invalidCountType);
  }
}

export { validateCarName, validateGameCount };
