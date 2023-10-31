const MESSAGES = {
  REQUEST: {
    INPUT_VEHICLES:
      '경주할 자동차 이름을 입력하세요.\n(이름은 쉼표(,) 기준으로 구분합니다.)\n',
    INPUT_ROUND: '시도할 횟수는 몇 회인가요?\n',
  },
  ERROR: {
    EMPTY_INPUT: '[ERROR] 입력 값이 없습니다.',

    INVALID_INPUT_CHARACTER_VEHICLES:
      '[ERROR] 자동차 목록은 공백 없이 영문자와 쉼표만 사용하여 입력해주세요.',
    INVALID_INPUT_FORMAT_VEHICLES:
      '[ERROR] 자동차 이름 사이에 쉼표를 한개만 입력해주세요.\n(입력 값은 자동차 이름으로 끝나야합니다.)',
    EXCEED_LENGTH_VEHICLE_NAME:
      '[ERROR] 각 자동차의 이름은 5자 이하로 입력해주세요.',
    DUPLICATE_VEHICLES_NAME:
      '[ERROR] 각 자동차의 이름이 중복되지 않도록 입력해주세요.',
    TOO_FEW_VEHICLES: '[ERROR] 두 개 이상의 자동차를 입력해주세요.',

    INVALID_INPUT_FORMAT_ROUND: '[ERROR] 시도할 횟수는 숫자로 입력해주세요.',
  },
  GAME_RESULT: '실행 결과',
  GAME_WINNER: '최종 우승자',
};

export default MESSAGES;
