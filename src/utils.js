const checkNameFormat = (string) => {
  if (!string.includes(','))
    throw new Error('[ERROR] 이름 형식이 맞지 않습니다.');
};

const checkNameLength = (name) => {
  if (name.length > 5)
    throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
};

const validateCarNames = (input) => {
  checkNameFormat(input);

  const carNames = input.split(',');

  if (carNames.includes(''))
    throw new Error('[ERROR] 자동차는 이름이 있어야 합니다.');
  carNames.forEach(checkNameLength);

  return carNames;
};

const validateRoundCount = (input) => {
  if (!Number(input)) throw new Error('[ERROR] 숫자가 아닙니다.');
  if (!Number.isInteger(Number(input)))
    throw new Error('[ERROR] 정수가 아닙니다.');
  return Number(input);
};

export { validateCarNames, validateRoundCount };
