const INPUT_MESSAGE = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: '[ERROR] 이름은 5자 이하만 가능합니다.',
  TRY_COUNT: '[ERROR] 시도할 횟수는 양의 정수여야 합니다.',
});

const CONDITION = Object.freeze({
  NAME_LENGTH: (name) => name.length > 5,
  TRY_COUNT: (count) => count < 1 || Math.ceil(count) !== count,
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: '\n실행 결과',
  RACE: (name, forwardCount) => `${name} : ${'-'.repeat(forwardCount)}`,
  WINNERS: (winners) => {
    const winnerNames = winners.map((winner) => winner.getName());
    return `최종 우승자 : ${winnerNames.join(', ')}`;
  },
});

export { INPUT_MESSAGE, ERROR_MESSAGE, CONDITION, OUTPUT_MESSAGE };
