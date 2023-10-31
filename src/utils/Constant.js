const NUMBER = Object.freeze({
  MIN: 0,
  MAX: 9,
  RANDOM: 4,
  NAME: 5,
  LENGTH: 2,
});

const MESSAGE = Object.freeze({
  READ_NAMES:
    '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
  READ_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
  PRINT_RESULT: '\n실행 결과',
  PRINT_ICON: '-',
  PRINT_WINNER: '최종 우승자 : ',
});

const ERROR_HEADER = '[ERROR]';

export { NUMBER, MESSAGE, ERROR_HEADER };
