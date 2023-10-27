export const MESSAGE = Object.freeze({
  ENTER_CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_TRY: '시도할 횟수는 몇 회인가요?\n',
  OUTCOME: '실행 결과',
  tellResult: ({ name, steps }) => `${name} : ${'-'.repeat(steps)}\n`,
  announceWinners: (winners) => `최종 우승자 : ${winners.join(', ')}`,
});

export const ERROR = Object.freeze({
  OVER_FIVE_LETTERS: '[ERROR] 자동차 이름은 5글자 이하여야 합니다.',
  NAN: '[ERROR] 숫자 형식이 아닙니다.',
});
