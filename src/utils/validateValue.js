import ERROR_MESSAGE from '../consts/errorMessage.js';

const { CAR, MOVECOUNT } = ERROR_MESSAGE;
const {
  NOT_A_NUMBER,
  NOT_AN_INTEGER,
  NEGATIVE_NUMBER,
  ZERO_NUMBER,
  EMPTY_COUNT,
} = MOVECOUNT;
const { EMPTY_NAME, NAME_TOO_LONG, DUPLICATE_NAME } = CAR;

export function validateCountNumber(moveCount) {
  const inputValueNumber = Number(moveCount);

  if (isNaN(inputValueNumber)) {
    throw new Error(NOT_A_NUMBER);
  }
  if (inputValueNumber % 1 !== 0) {
    throw new Error(NOT_AN_INTEGER);
  }
  if (inputValueNumber < 0) {
    throw new Error(NEGATIVE_NUMBER);
  }
  if (inputValueNumber === 0) {
    throw new Error(ZERO_NUMBER);
  }
  if (inputValueNumber === '') {
    throw new Error(EMPTY_COUNT);
  }
}

export function validateCarName(carName) {
  if (carName === '') {
    throw new Error(EMPTY_NAME);
  }

  if (carName.length > 5) {
    throw new Error(NAME_TOO_LONG);
  }
}

export function hasDuplicate(list) {
  const set = new Set(list);
  return set.size < list.length;
}

export function valiadateDuplicteName(list) {
  const isDuplicte = hasDuplicate(list);
  if (isDuplicte) {
    throw new Error(DUPLICATE_NAME);
  }
}

export function validateCarNames(list) {
  list.forEach(carName => validateCarName(carName));
}
