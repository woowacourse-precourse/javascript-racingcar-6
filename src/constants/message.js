const MESSAGE = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '\n실행 결과',
  RACE: (name, forwardCount) => `${name} : ${'-'.repeat(forwardCount)}`,
  WINNERS: (winners) => {
    const winnerNames = winners.map((winner) => winner.getName());
    return `최종 우승자 : ${winnerNames.join(', ')}`;
  },
});

export default MESSAGE;
