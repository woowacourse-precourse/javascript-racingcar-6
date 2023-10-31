export const CAR = {
  MOVING_FORWARD: '-',
  STOP: '',
};

export const REQUEST_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  GAME_COUNT: '시도할 횟수는 몇 회인가요?',
};

export const VALIDATION_ERRORS_MESSAGE = {
  EMPTY_INPUT: '[ERROR] 입력값이 없습니다.',
  NOT_ONLY_STRING:
    '[ERROR] 자동차 이름은 공백없이 알파벳 문자만 포함해야 합니다.',
  OVER_THE_RANGE: '[ERROR] 자동차 이름은 5자리 이하여야 합니다.',
  NOT_NUMBER: '[ERROR] 입력값이 숫자가 아닙니다.',
};
