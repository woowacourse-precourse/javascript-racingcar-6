import { VALIDATION } from '../constants/MESSAGE';

// 자동차 이름이 5글자 초과 시 예외발생시키기
const validateCarNames = (names) => {
  names.forEach((name) => {
    if (name.length > 5) throw new Error(VALIDATION.NAME_LENGTH);
  });
  if (names.length < 2) throw new Error(VALIDATION.CAR_COUNT);
};

// 시도횟수가 숫자가 아닐 경우 예외발생시키기
const validateTryCount = (count) => {
  const tryCount = Number(count);

  if (isNaN(tryCount) || count.trim() === '')
    throw new Error(VALIDATION.TRY_COUNT);
};

export { validateCarNames, validateTryCount };
