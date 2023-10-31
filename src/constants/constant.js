const MESSAGE = {
  GAME: {
    START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    INPUT: '시도할 횟수는 몇 회인가요?\n',
    RESULT: '\n실행 결과',
    WINNER: '최종 우승자 :',
  },
  ERROR: {
    CARNAME: {
      LENGTH_ERROR: '[ERROR] 자동차 이름은 각 5자 이하만 가능합니다.',
      NULL_ERROR: '[ERROR] 자동차 이름은 1자 이상 5자 이상 입력가능합니다.',
    },
    CHANCE: {
      NUMBER_ERROR: '[ERROR] 횟수는 숫자로만 입력가능합니다.',
      OVER_ZERO_ERROR: '[ERROR] 횟수는 1 이상의 숫자로 입력가능합니다.',
      NULL_ERROR: '[ERROR] 횟수는 1 이상의 숫자로 입력가능합니다.',
    },
  },
};

export default MESSAGE;
