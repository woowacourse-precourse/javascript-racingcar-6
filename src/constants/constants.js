const SYMBOLS = {
  movingDistanceSymbol: '-',
  carNameSeperator: ',',
  winnerNameSeperator: ',',
  roundDivision: ''
}

const SETTING_NUMBERS = {
  minRandomNum: 0,
  maxRandomNum: 9,
  moveThreshold: 4,
  minCarNameLength: 1,
  maxCarNameLength: 5
}

const ERROR_MESSAGES = {
  // carNames
  blankInput: '자동차 이름에 공백을 입력했습니다.',
  overLength: `자동차 이름의 길이는 ${SETTING_NUMBERS.maxCarNameLength} 이하만 가능합니다.`,
  duplication: '자동차 이름이 중복되어서는 안 됩니다.',
  
  // racingCount
  notNumber: '경주 횟수는 숫자로 입력해야 합니다.',
  notNaturalNumber: '경주 횟수는 자연수만 입력해야 합니다.'
}

const GUIDE_MESSAGES = {
  carNamesGuide: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  racingCountGuide: '시도할 횟수는 몇 회인가요?',
  resultGuide: '실행 결과',
  winnerGuide: '최종 우승자'
}

export {
  SYMBOLS,
  SETTING_NUMBERS,
  ERROR_MESSAGES,
  GUIDE_MESSAGES
}