const INPUT_MESSAGE = {
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  INPUT_PLAY_NUM: '시도할 횟수는 몇 회인가요?',
};

const PRINT_MESSAGE = {
  PLAY_RESULT: '실행 결과',
  SCORE_BAR: '-',
  SEPARATOR: ', ',
  NEW_LINE: '\n',
  formatCarScore: (carName, score) => `${carName} : ${score}`,
  winnerList: (winnerList) => `최종 우승자 : ${winnerList}`,
};

const ERROR_MESSAGE = {
  NO_SPECIAL_CHARACTER: '[ERROR] 입력에 특수문자는 사용할 수 없습니다.',
  NO_WHITE_SPACE: '[ERROR] 입력에 공백은 사용할 수 없습니다.',
  CAR_LIST_MINIMUM: '[ERROR] 경주할 자동차의 목록은 2개 이상이어야 합니다.',
  DUPLICATE_NAME: '[ERROR] 경주할 자동차의 이름은 중복될 수 없습니다.',
  NAME_LENGTH: '[ERROR] 경주할 자동차의 이름은 5자 이하여야 합니다.',
  NO_NUMERIC: '[ERROR] 시도할 횟수를 숫자로 입력해주세요.',
  MIN_PLAY_COUNT: '[ERROR] 시도할 횟수를 1 이상으로 입력해주세요.',
};

export { INPUT_MESSAGE, PRINT_MESSAGE, ERROR_MESSAGE };
