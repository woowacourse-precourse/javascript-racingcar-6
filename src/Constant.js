const MESSAGE = {
  advance: '-',
  carNamesInput: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  countInput: '시도할 횟수는 몇 회인가요?\n',
  result: '\n실행결과',
  winner: '최종 우승자 : ',
  winnerType: ', ',
};

const RACING_GAME = {
  delimiter: ',',

  nameMaxLength: 5,
  forwardConditionNumber: 4,
  minNumber: 0,
  maxNumber: 9,
};

const ERROR = {
  delimiterType: '[ERROR] 쉼표(,)를 기준으로 구분해야 합니다.',
  nameEmpty: '[ERROR] 각 이름은 공백을 제외한 1자 이상이여야 합니다.',
  nameLength: '[ERROR] 각 이름은 5자 이하여야 합니다.',
  nameOverlap: '[ERROR] 중복된 이름을 입력하셨습니다.',

  countType: '[ERROR] 0~9의 숫자형태로 입력해야 합니다.',
  countRange: '[ERROR] 1이상의 숫자를 입력해야 합니다. ',
};

const REGEXP = {
  IS_NOT_NUMBER: /[^0-9]/,
};

export {
  MESSAGE,
  RACING_GAME,
  ERROR,
  REGEXP,
};
