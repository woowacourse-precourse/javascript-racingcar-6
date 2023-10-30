export const LOG_MESSAGE = Object.freeze ({
  INPUT_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  ZERO_TRY_NUMBER: '시도 횟수는 1 이상을 입력하면 경주가 시작됩니다.',
  SHOW_RESULT: '\n실행 결과',
  SHOW_WINNER: '\n최종 우승자 : ',
  END_GAME: '게임 종료'
});

export const ERROR_MESSAGE = Object.freeze ({
  INCORRECT_CAR_NAME: '[ERROR] 각 자동차 이름은 1~5자로 입력해 중복 없이 입력해 주세요.',
  INCORRECT_TRY_NUMBER: '[ERROR] 시도 횟수는 0~9까지의 1자리 숫자로 입력해 주세요.'
});
