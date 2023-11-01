const ERROR_MESSAGE = "[ERROR] 입력이 올바르지 않습니다. 게임을 종료합니다.";

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