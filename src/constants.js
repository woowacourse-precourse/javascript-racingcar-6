export const GAME_MESSAGES = {
  START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GET_TRIES: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '실행결과',
  FINAL_WINNER: '최종 우승자: ',
};

export const NUMBER_RANGE = {
  MIN: 0,
  MAX: 9,
};

export const RANDOM_THRESHOLD = 4;

export const CAR_MOVEMENT_RESULT = '-';

export const CAR_NAME_ERRORS = {
  MIN_COUNT: '[ERROR] 자동차 이름은 최소 2개 이상 입력되어야 합니다.',
  EMPTY_STRING: '[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.',
  MAX_LENGTH: '[ERROR] 자동차 이름은 5자 이하이어야 합니다.',
  DUPLICATE_NAME: '[ERROR] 중복된 자동차 이름이 입력되었습니다.',
};

export const NUMBER_INPUT_ERRORS = {
  NOT_A_NUMBER: '[ERROR] 시도할 횟수는 숫자여야 합니다.',
  ZERO_TRIES: '[ERROR] 시도 횟수는 0일 수 없습니다.',
  NEGATIVE_TRIES: '[ERROR] 시도 횟수는 음수일 수 없습니다.',
  NOT_AN_INTEGER: '[ERROR] 시도 횟수는 정수여야 합니다.',
};

export const ERROR_EMPTY_INPUT = '[ERROR] 빈 값을 입력했습니다.';
