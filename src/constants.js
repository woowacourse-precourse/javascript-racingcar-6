const IN_GAME_SETTING = {
  minCarNumber: 2,
  maxCarNumber: 9,
  minCarNameLength: 1,
  maxCarNameLength: 5,
  minTurnNumber: 1,
  maxTurnNumber: 9,
};

const IN_GAME_MESSAGE = {
  getInputCarName:
    '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분하며 영문 대소문자 및 숫자만 허용)',
  getInputTurnNumber: '시도할 횟수는 몇 회인가요? (1~9 사이의 숫자로 입력)',
  gameResultHeader: '최종 우승자 : ',
};

const IN_GAME_ERROR = {
  invalidInputCarName: {
    emptyInput: '[ERROR] 자동차 이름을 입력해 주셔야 합니다.',
    outOfRangeNumbers: '[ERROR] 자동차 이름은 2~9개 사이로 입력해 주셔야 합니다.',
    invalidCarNameFormat: '[ERROR] 자동차 이름은 5자 이하의 영문 대소문자 및 숫자만 허용됩니다.',
    duplicatedCarName: '[ERROR] 서로 중복되는 자동차 이름이 없어야 합니다.',
  },
  invalidInputTurnNumber: '[ERROR] 시도할 횟수는 1에서 9 사이의 숫자로 입력해 주셔야 합니다.',
};

export { IN_GAME_SETTING, IN_GAME_MESSAGE, IN_GAME_ERROR };
