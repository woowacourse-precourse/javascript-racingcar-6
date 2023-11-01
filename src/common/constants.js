export const GAME_SETTING = Object.freeze ({
  MIN_LENGTH_CAR_NAME: 1,
  MAX_LENGTH_CAR_NAME: 5,
  MIN_TRY_COUNT: 1,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
  MOVE_FORWARD_REQUIREMENT: 4,
  MOVE_FORWARD_POSITION: '-',
  BLANK_SPACE: '',
});

export const LOG_MESSAGE = Object.freeze ({
  INPUT_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_RESULT: '\n실행 결과',
  OUTPUT_WINNER: '\n최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze ({
  INCORRECT_CAR_NAME: '[ERROR] 각 자동차 이름은 1~5자로 입력해 중복 없이 입력해 주세요.',
  INCORRECT_TRY_NUMBER: '[ERROR] 시도 횟수는 0~9까지의 1자리 숫자로 입력해 주세요.'
});
