export const ERROR_MESSAGE = Object.freeze({
  INVALID_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 1~5자 사이로 입력해주세요.',
  INVALID_CAR_NAME_CHAR: '[ERROR] 스페이스 또는 공백은 입력 불가능합니다.',
  INVALID_CAR_NAME_UNIQUE: '[ERROR] 자동차 이름은 중복 되지않게 입력해주세요',
  INVALID_INPUT_TYPE: '[ERROR] 숫자만 입력해주세요.',
  INVALID_NUMBER_RANGE: '[ERROR] 1이상의 숫자만 입력해주세요.',
});

export const INPUT_MESSAGE = Object.freeze({
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_MOVE_NUMBER: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  OUTPUT_RESULT: '\n실행 결과',
  OUTPUT_WINNER: '최종 우승자 : ',
});
