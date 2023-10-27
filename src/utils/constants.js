const SYMBOLS = {
  comma: ',',
  winnerNameSeparator: ', ',
  dash: '-',
  playerResultSeparator: ' : ',
};

const GAME_NUMBERS = {
  rangeMin: 0,
  rangeMax: 9,
  movementThreshold: 4,
  carNameMaxLength: 5,
};

const GAME_MESSAGES = {
  carNameQuery:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  roundsNumberQuery: '시도할 횟수는 몇 회인가요?\n',
  resultHeader: '실행 결과',
  winnerAnnouncementHeader: '최종 우승자 : ',
};

const ERROR_MESSAGES = {
  carName: {
    invalidLength: `자동차 이름은 ${GAME_NUMBERS.carNameMaxLength} 이하만 가능합니다.`,
    duplicate: '자동차 이름은 중복될 수 없습니다.',
    blank: '자동차 이름이 공백입니다.',
  },
  roundsNumber: {
    negativeValue: '시도 횟수는 음수일 수 없습니다.',
    notNumber: '시도 횟수는 숫자만 허용됩니다.',
  },
};

export { SYMBOLS, GAME_NUMBERS, GAME_MESSAGES, ERROR_MESSAGES };
