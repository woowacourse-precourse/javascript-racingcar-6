const SYMBOLS = {
  carNameSeparator: ',',
  winnerNameSeparator: ', ',
  moveIndicator: '-',
  playerResultSeparator: ' : ',
};

const GAME_NUMBERS = {
  rangeMin: 0,
  rangeMax: 9,
  movementThreshold: 4,
  carNameMaxLength: 5,
  minCarCount: 2,
  minRoundNumber: 1,
};

const GAME_MESSAGES = {
  carNameQuery:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  roundsNumberQuery: '시도할 횟수는 몇 회인가요?',
  resultHeader: '실행 결과',
  winnerPrefix: '최종 우승자 : ',
};

const ERROR_MESSAGES = {
  carName: {
    notEnoughCars: `자동차 갯수는 최소 ${GAME_NUMBERS.minCarCount}개 이상이어야 합니다.`,
    invalidLength: `자동차 이름은 ${GAME_NUMBERS.carNameMaxLength} 이하만 가능합니다.`,
    duplicate: '자동차 이름은 중복될 수 없습니다.',
    blank: '자동차 이름이 공백입니다.',
  },
  roundsNumber: {
    negativeValue: '시도 횟수는 음수일 수 없습니다.',
    isZero: '시도 횟수는 적어도 1회 이상이어야 합니다.',
    notNumber: '시도 횟수는 숫자만 입력할 수 있습니다.',
    notNaturalNumber: '시도 횟수는 자연수만 허용됩니다.',
    notInRange: `시도 횟수는 최소 ${GAME_NUMBERS.minRoundNumber}회 이상이어야 합니다.`,
  },
};

export { SYMBOLS, GAME_NUMBERS, GAME_MESSAGES, ERROR_MESSAGES };
