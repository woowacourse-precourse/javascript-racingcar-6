const INFO_MESSAGE = Object.freeze({
  GET_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  GET_PLAY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '\n실행결과',
  WINNER: (winner) => `최종 우승자 : ${winner.join(', ')}`,
});

const ERROR_MESSAGE = Object.freeze({
  LENGTH: '[ERROR] 이름은 5자 이하로 작성해야 합니다.',
  TYPE: '[ERROR] 숫자를 입력해야 합니다.',
  SCOPE: '[ERROR] 1 이상의 정수를 입력해야 합니다.',
});

export { INFO_MESSAGE, ERROR_MESSAGE };
