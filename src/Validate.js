import { ERROR } from './Constants.js';

export function validateDuplicateName(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERROR.nameDuplicated);
  }
}

export function validateNumberOfNames(names) {
  if (names.length < 2) {
    throw new Error(ERROR.invalidNumberOfNames);
  }
}

export function validateNameLength(name) {
  if (name.length < 1 || name.length > 5) {
    throw new Error(ERROR.invalidNameLength);
  }
}

export function validateTypeOfName(name) {
  const specialCharacterRegExp = /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/;
  if (specialCharacterRegExp.test(name)) {
    throw new Error(ERROR.invalidNameType);
  }
}

export function validateRangeOfCount(count) {
  if (count < 1) {
    throw new Error(ERROR.invalidCountRange);
  }
}

export function validateTypeOfCount(count) {
  const numberRegExp = /^[0-9]+$/;
  if (!numberRegExp.test(count)) {
    throw new Error(ERROR.invalidCountType);
  }
}
