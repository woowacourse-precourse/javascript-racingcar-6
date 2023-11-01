const MESSAGE = {
  enterCarNames:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  enterTryNumber: '시도할 횟수는 몇 회인가요?\n',
  executeResult: '\n실행 결과',
  finalWinner: '최종 우승자 : ',
  score: '-',
};

const ERROR_MESSAGE = {
  isOverFive: '[ERROR] 자동차 이름을 5자리 이하로 입력해 주세요.',
  isBlank: '[ERROR] 자동차 이름으로 공백을 사용하실 수 없습니다.',
  isWithBlank: '[ERROR] 자동차 이름에 공백을 포함하지 마세요.',
  isDuplicated: '[ERROR] 중복된 자동차 이름입니다.',
  isNotNumber: '[ERROR] 숫자를 입력해 주세요.',
};

const RANGE_NUMBER = {
  carName: 5,
  canMove: 4,
  randomNumberMin: 0,
  randomNumberMax: 9,
};

export { MESSAGE, RANGE_NUMBER, ERROR_MESSAGE };
