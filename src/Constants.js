const MESSAGE = Object.freeze({
  INPUT_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_GAME_COUNT: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_GAME_RESULT: '실행 결과',
  OUTPUT_FINAL_WINNER: '최종 우승자 :',
});

const ERROR = Object.freeze({
  CAR_NAME_TYPE: '[ERROR] 자동차 이름은 영어로 입력해주세요',
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 알파벳 5자 이하로 입력해주세요',
  CAR_NAME_DUPLICATE: '[ERROR] 자동차 이름은 중복될 수 없습니다',
  GAME_COUNT_TYPE: '[ERROR] 시도 횟수는 자연수로 입력해주세요',
});

export default { MESSAGE, ERROR };
