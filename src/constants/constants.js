export const READ_MESSAGE = {
  start: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  move: '시도할 횟수는 몇 회인가요?',
};

export const PRINT_MESSAGE = {
  result: '실행 결과',
  winner: '최종 우승자 : ',
};

export const ERROR_MESSAGE = {
  notLengthFiveOrLess: '[ERROR] 이름은 5자 이하로 입력해야 합니다.',
  notNumberMoveCount: '[ERROR] 이동 횟수는 숫자로만 입력해야 합니다.',
};

export const CONFIG = {
  nameMaxLength: 5,
  range: {
    minNumber: 0,
    maxNumber: 9,
  },
};
