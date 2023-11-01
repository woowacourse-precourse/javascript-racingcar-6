export const CONSTANT = Object.freeze({
  notMove: 0,
  movable: 4,
  maxNameLength: 5,
});

export const RANDOM_NUMBER = Object.freeze({
  minNum: 0,
  maxNum: 9,
});

export const SYMBOL = Object.freeze({
  movement: '-',
});

export const MESSAGE = Object.freeze({
  enterCarNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  enterNumbersOfAttempts: '시도할 횟수는 몇 회인가요?\n',
  executeResult: '실행 결과',
  finalWinner: '최종 우승자 :',
});

export const ERROR = Object.freeze({
  errorPrefix: '[ERROR]',
  hasEmpty: '자동차 이름 중 공백이 있습니다.',
  hasDuplicate: '중복된 자동차 이름이 있습니다.',
  longerThanMaxLen: '길이가 5자 초과인 이름이 있습니다. 이름은 5자 이하여야 합니다.',
  isNotNumber: '입력값이 숫자가 아닙니다.',
  isNegative: '입력값이 음수입니다. 실행 횟수는 0보다 큰 정수여야 합니다.',
  notMoving: '입력값이 0입니다. 실행 횟수는 0보다 큰 정수여야 합니다.',
  isNotInteger: '입력값이 정수가 아닙니다. 실행 횟수는 0보다 큰 정수여야 합니다.',
});
