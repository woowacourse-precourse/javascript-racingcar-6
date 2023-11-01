const MESSAGES = Object.freeze({
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_RACE_ROUNDS: '시도할 회수는 몇 회인가요?\n',
  ERROR_DUPLICATE_CAR_NAME: '[ERROR] 자동차 이름이 중복됩니다.',
  ERROR_BLANK_CAR_NAME: '[ERROR] 자동차 이름은 공백일 수 없습니다.',
  ERROR_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  ERROR_INVALID_ROUNDS: '[ERROR] 시도 횟수는 양의 정수만 가능합니다.',
  ERROR_CAR_COUNT: '[ERROR] 자동차는 한 대 이상 입력해야 합니다.',
  NO_WINNERS: '우승자가 없습니다.',
  FINAL_WINNERS: '최종 우승자 : ',
  RACING_RESULT: '\n실행 결과',
});

export default MESSAGES;
