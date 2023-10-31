/** 메시지 */
export const INPUT_MESSAGES = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGES = {
  WINNER_PREFIX: '최종 우승자 : ',
};

export const ERROR_MESSAGES = Object.freeze({
  INVALID_CAR: '유효한 입력값이 아닙니다.',
  INVALID_ATTEMPTS: '유효한 숫자를 입력해주세요.',
});

export const REGEX_PATTERNS = Object.freeze({
  ALPHABETIC: /^[a-zA-Z]{1,5}$/,
  NUMERICL: /^(?:[1-9]|[1-9][0-9]|100)$/,
});

/** 전진 여부를 결정하는 최소값 */
export const FORWARD_THRESHOLD = 4;

export const CONSTANTS = {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
  REGEX_PATTERNS,
  FORWARD_THRESHOLD,
};
