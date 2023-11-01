export const validateCarNames = (carNames) => {
  const names = carNames.split(',').map((name) => name.trim());

  if (names.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
  }

  if (names.some((name) => name.length === 0)) {
    throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
  }
};

export const validateRounds = (rounds) => {
  const parsedRounds = parseInt(rounds, 10);

  if (isNaN(parsedRounds) || parsedRounds <= 0) {
    throw new Error('[ERROR] 시도 횟수는 1 이상의 정수로 입력해주세요.');
  }
};
