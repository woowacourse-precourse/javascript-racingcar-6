const GUIDE_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  laps: '시도할 횟수는 몇 회인가요?\n',
  result: '\n실행 결과',
  lapScore: (name, score) => `${name} : ${score}`,
  finalWinner: (winner) => `최종 우승자 : ${winner}`,
});

const ERROR_MESSAGE = Object.freeze({
  tooLongName: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
  emptyName: '[ERROR] 자동차 이름을 입력해주세요.',
  duplicationName: '[ERROR] 중복된 자동차 이름이 있습니다.',
  positive: '[ERROR] 시도 횟수는 0보다 커야 합니다.',
  number: '[ERROR] 시도 횟수는 숫자여야 합니다.',
});

const SETTINGS = Object.freeze({
  minRandomNumber: 0,
  maxRandomNumber: 9,
  maxNamingLength: 5,
  minLaps: 1,
  defaultPoint: 0,
  progress: 1,
  refuelStandard: 4,
});

const SYMBOLS = Object.freeze({
  whiteSpace: '',
  dash: '-',
  comma: ',',
  commaSpace: ', ',
});

export { GUIDE_MESSAGE, ERROR_MESSAGE, SETTINGS, SYMBOLS };
