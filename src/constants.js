const CONSOLE_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GAME_CHANCES: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '\n실행결과',
  FINAL_WINNER: '최종 우승자',
};

const ERROR_MESSAGE = {
  DUPLICATED_NAME: '[ERROR] 중복된 이름이 있습니다.',
  BLANK_EXISTS: '[ERROR] 이름에 공백이 있습니다.',
  TOO_LONG: '[ERROR] 이름은 5 글자를 초과할 수 없습니다.',
  NOT_A_NUMBER: '[ERROR] 숫자가 아닙니다.',
};

export { CONSOLE_MESSAGE, ERROR_MESSAGE };
