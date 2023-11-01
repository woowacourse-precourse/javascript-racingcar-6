const GAME_INT = {
  MAX_LENGTH: 5,
  RANGE_FROM: 0,
  RANGE_TO: 9,
  MOVE_NUMBER: 4,
};

const INPUT_MESSAGE = {
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPT_NUMBER: '시도할 횟수는 몇 회인가요?\n',
};

const OUTPUT_MESSAGE = {
  PROGRESS_RESULT: '실행 결과',
  PROGRESS: (name, distance) => `${name} : ${distance}`,
  WINNER: (winner) => `최종 우승자 : ${winner}`,
};

const ERROR_MESSAGE = {
  NAME_LENGTH: '[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.',
  DUPLICATION: '[ERROR] 자동차 이름이 중복되었습니다.',
  NATURAL_NUMBER: '[ERROR] 1 이상의 숫자를 입력해야 합니다.',
};

const GAME_STRING = {
  NAME_SPLIT: ',',
  DISTANCE: '-',
  WINNER_JOIN: ', ',
  NEW_LINE: '\n',
};

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE, GAME_STRING, GAME_INT };
