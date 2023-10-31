export const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  EXECUTE_REULT: '실행결과\n',
  GAME_WINNER: '최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  LENGTH_ERROR: '[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.',
  DUPLICATE_ERROR: '[ERROR] 자동차 이름이 중복되었습니다.',
  NOT_NUMBER_ERROR: '[ERROR] 잘못된 데이터 형식입니다. 숫자를 입력해주세요.',
  NO_CAR_NAME: '[ERROR] 자동차 이름을 입력해주세요.',
  NO_NUMBER: '[ERROR] 시도 횟수를 입력해주세요.',
});
