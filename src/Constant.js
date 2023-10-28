export const CONSTANT = {
  maxNameLength: 5,
  movable: 4,
  notMove: 0,

  minRandomNum: 0,
  maxRandomNum: 9,
};

export const MESSAGE = {
  enterCarNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  enterNumbersOfAttempts: '시도할 횟수는 몇 회인가요?\n',
  executeResult: '실행 결과\n',
  finalWinner: '최종 우승자 :',
};

export const ERROR = {
  errorPrefix: '[ERROR]',
  isEmpty: '자동차 이름 중 공백이 있습니다.',
  hasDuplicate: '중복된 자동차 이름이 있습니다.',
  longerThanMaxLen: '길이가 5자 초과인 이름이 있습니다. 이름은 5자 이하여야 합니다.',
  isNotNumber: '입력값이 숫자가 아닙니다.',
  notMoving: '입력값이 0입니다. 실행 횟수는 0보다 큰 숫자여야 합니다.',
};
