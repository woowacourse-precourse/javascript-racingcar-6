const INFO_MESSAGE = Object.freeze({
  carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  playNumber: '시도할 횟수는 몇 회인가요?\n',
  result: '\n실행결과',
  winner: (winner) => `최종 우승자 : ${winner.join(', ')}`,
});

const ERROR_MESSAGE = Object.freeze({
  empty: '[ERROR] 이름을 입력해야 합니다.',
  length: '[ERROR] 이름은 5자 이하로 입력해야 합니다.',
  duplicate: '[ERROR] 중복되지 않은 이름을 입력해야 합니다.',
  type: '[ERROR] 숫자를 입력해야 합니다.',
  scope: '[ERROR] 1 이상의 정수를 입력해야 합니다.',
});

export { INFO_MESSAGE, ERROR_MESSAGE };
