import { ERRORS } from "./Message";
export function checkCarNames(names) {
  const name = names.split(",");
  const carNames = name.map((name) => name.trim());
  const setName = new Set(name);

  if (!names) {
    throw new Error(ERRORS.CAR_NAMES_NOT_INPUTED);
  }
  if (!(carNames.length > 1 && carNames.length < 10)) {
    throw new Error(ERRORS.CAR_NAMES_COUNT_OUT_OF_RANGE);
  }
  if (carNames.length !== setName.size) {
    throw new Error(ERRORS.CAR_NAMES_DUPLICATED);
  }
  if (carNames.some((name) => name.length > 5)) {
    throw new Error(ERRORS.CAR_NAMES_LENGTH_TOO_LONG);
  }
  return carNames;
}

export function checkTryCount(number) {
  const tryCount = Number(number);
  if (!number) {
    throw new Error(ERRORS.TRY_COUNT_NOT_INPUTED);
  }
  if (tryCount <= 0 || tryCount > 10) {
    throw new Error(ERRORS.TRY_COUNT_OUT_OF_RANGE);
  }
  if (Number.isNaN(tryCount)) {
    throw new Error(ERRORS.TRY_COUNT_NOT_NUMBER);
  }
  return tryCount;
}
