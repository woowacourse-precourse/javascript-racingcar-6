const GAME_MESSAGE = {
  INPUT_CARS_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_MOVE_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RACE_RESULT: '실행 결과\n',
  WINNER: '최종 우승자 : ',
};

const ERROR_MESSAGE = {
  INPUT_ONLY_NUMBER: '[ERROR] 시도 횟수는 숫자로 입력해주세요.',
  INPUT_CORRECT_RANGE: '[ERROR] 이름은 쉼표(,) 기준으로 구분하여 5자 이내로 입력해주세요.',
};

export { GAME_MESSAGE, ERROR_MESSAGE };
