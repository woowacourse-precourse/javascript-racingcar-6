export const ERROR = Object.freeze({
  INVALID_CAR_NAME: '형식에 맞지 않는 차 이름입니다.',
  printError(message) {
    console.error(`[ERROR] : ${message}`);
  },
});

export const REGEX = Object.freeze({
  VALID_CAR_NAME: /^[^\0,]{1,5}$/,
});
