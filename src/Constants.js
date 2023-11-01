const ERROR_MESSAGE = {
  DEFAULT_ERROR: "[ERROR] 입력이 올바르지 않습니다. 게임을 종료합니다.",
  CAR_NAME_LENGTH_ERROR: "[ERROR] 자동차의 이름은 5글자가 넘어선 안됩니다.",
  CAR_DUPLICATE_ERROR: "[ERROR] 자동차 이름은 중복되어선 안됩니다.",
  CAR_EMPTY_ERROR: "[ERROR] 자동차 이름에 공백이 포함되어선 안됩니다.",
  CAR_COUNT_ERROR: "[ERROR] 자동차의 입력은 최소 2대에서 10대 이하 입니다.",
  TRY_COUNT_ERROR: "[ERROR] 1회 이상 게임을 시도해야 합니다"
}

const PLAY_GAME = {
  INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?',
  RESULT: '\n실행 결과',
  WINNER: '최종 우승자 : ',
  MOVE_RESULT: '-',
};

const VALID_LENGTH = {
  NAME_MAX_LENGTH: 5,
  CAR_MIN_LENGTH: 1,
  CAR_MAX_LENGTH: 10,
  CAR_NAME_EMPTY: 0,
}

const CONDITION_POINT = {
  MOVE_MIN_POINT: 4,
  NOT_TRY_COUNT: 0,
}

export { PLAY_GAME, VALID_LENGTH, CONDITION_POINT, ERROR_MESSAGE };