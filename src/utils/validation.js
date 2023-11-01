const validateCarNames = (carNames) => {
  carNames.forEach((name) => {
    if (name.trim().length < 1 || name.trim().length > 5) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
    }
  });

  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size !== carNames.length) {
    throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
  }
};

const validateAttemptNumber = (attemptNumber) => {
  if (!Number(attemptNumber) || attemptNumber < 1) {
    throw new Error('[ERROR] 1 이상의 숫자를 입력해야 합니다.');
  }
};

export { validateCarNames, validateAttemptNumber };
