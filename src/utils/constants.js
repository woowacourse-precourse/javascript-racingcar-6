const SYMBOLS = {
  comma: ',',
  commaWithSpace: ', ',
  dash: '-',
  divider: ' : ',
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
  invalidCarNameLength: `[ERROR]자동차 이름은 ${GAME_NUMBERS.carNameMaxLength} 이하만 가능합니다.`,
  invalidMovementCountNumber: '[ERROR]숫자가 잘못된 형식입니다.',
};

export { SYMBOLS, GAME_NUMBERS, GAME_MESSAGES, ERROR_MESSAGES };
