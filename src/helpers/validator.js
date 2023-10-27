const ALPHABETIC_PATTERNS = /^[a-zA-Z]{1,5}$/;
const NUMERIC_PATTERNS = /^[1-9]\d*$/;

export const validateCarNames = (carName) => {
  if (!ALPHABETIC_PATTERNS.test(carName)) {
    throw new Error('[ERROR] 유효한 입력값이 아닙니다.');
  }
  return carName;
};

export const validateAttempts = (attempts) => {
  if (!NUMERIC_PATTERNS.test(attempts)) {
    throw new Error('[ERROR] 유효한 숫자를 입력해주세요.');
  }
  return attempts;
};
