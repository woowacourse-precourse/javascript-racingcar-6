export const ERROR = Object.freeze({
  INVALID_CAR_NAME: '형식에 맞지 않는 차 이름입니다.',
  DUPLICATE_CAR_NAME: '이미 존재하는 차 이름입니다.',
  EMPTY_INPUT: '입력은 비어있거나 쉼표만 포함해서는 안됩니다.',
  INVALID_INPUT_NUMBER: '숫자가 잘못된 형식입니다.',
  printError(message) {
    console.error(`[ERROR] : ${message}`);
  },
});

export const REGEX = Object.freeze({
  VALID_CAR_NAME: /^[^\0,]{1,5}$/,
  COMMA_SEPARATED: /[^,]+/g,
  POSITIVE_INTEGER: /^[1-9][0-9]*$/,
});

export const CONSTANT = Object.freeze({
  MOVEMENT_THRESHOLD: 4,
  PROGRESS_BAR: '-',
});

export const CONSOLE_MESSAGE = Object.freeze({
  ENTER_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});
