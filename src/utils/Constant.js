const MESSAGE = {
  INPUT_CARS_NAME: '경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '\n실행 결과',
}

const ERROR = {
  INPUT_NAME_LENGTH_ZERO: '[ERROR] 자동차 이름이 입력되지 않았습니다.',
  INPUT_NAME_LENGTH_OVER_FIVE: '[ERROR] 자동차 이름 길이는 5이하 입니다.',
  INPUT_SPACE_IN_NAME: '[ERROR] 자동차 이름 안에 띄어쓰기가 있습니다.',
  INPUT_TRY_NUMBER_EMPTY: '[ERROR] 시도할 횟수를 입력받지 못했습니다.',
  INPUT_STRING_IN_TRY_NUMBER: '[ERROR] 시도할 횟수에 문자가 있습니다.',
}

export { MESSAGE, ERROR }