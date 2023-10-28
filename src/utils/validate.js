import { ERROR } from '../constants/constants.js';

function validateCarName(names) {
  validateNumberOfNames(names);

  names.forEach((carName) => {
    validateNameLength(carName);
  });

  validateDuplicateName(names);
}

function validateGameCount(count) {
  validateRangeOfCount(count);
  validateTypeOfCount(count);
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

function validateDuplicateName(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERROR.nameDuplicated);
  }
}

function validateRangeOfCount(count) {
  if (count < 1) {
    throw new Error(ERROR.invalidCountRange);
  }
}

function validateTypeOfCount(count) {
  const NumberRegExp = /^[0-9]+$/;
  if (!NumberRegExp.test(count)) {
    throw new Error(ERROR.invalidCountType);
  }
}

export { validateCarName, validateGameCount };
