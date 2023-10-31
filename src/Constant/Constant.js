const RACING_CAR_GAME = Object.freeze({
  GET_CAR: '경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GET_NUMBER: '시도 할 횟수는 몇 회인가요?\n',
  RESULT: '실행 결과',
  PRINT_WINNER: '최종 우승자',
  ERROR: {
    CAR_SPECIES: '[ERROR] 자동차 이름은 2가지 이상 작성하여야 합니다.',
    CAR_NAME_LENGTH: '[ERROR] 자동차의 이름은 5자 이하로 작성하여야 합니다.',
    CAR_NAME_SPACE: '[ERROR] 자동차의 이름은 공백이 포함될 수 없습니다.',
    GAME_NUMBER: '[ERROR] 게임 횟수는 0보다 큰 숫자를 입력하셔야 합니다.',
  },
});

export default RACING_CAR_GAME;
