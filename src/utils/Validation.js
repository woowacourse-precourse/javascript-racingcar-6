// 자동차 이름이 5글자 초과 시 예외발생시키기
const validateCarNames = (names) => {
  names.forEach((name) => {
    if (name.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요!');
  });
  if (names.length < 2)
    throw new Error('[ERROR] 자동차는 두 대 이상 입력해주세요!');
};

// 시도횟수가 숫자가 아닐 경우 예외발생시키기
const validateTryCount = (count) => {
  const tryCount = Number(count);

  if (isNaN(tryCount) || count.trim() === '')
    throw new Error('[ERROR] 입력값이 올바르지 않습니다. 숫자만 입력해주세요!');
};

export { validateCarNames, validateTryCount };
