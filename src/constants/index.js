export const MESSAGE = Object.freeze({
  carNameForStart: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  raceRoundForStart: `시도할 횟수는 몇 회인가요?\n`,
  roundResult: `\n실행 결과\n`,
  winnerResult: `최종 우승자 : `,
});

export const ERROR = Object.freeze({
  carNameInputLong: `[ERROR] 자동차 이름은 5자 이하여야 합니다.`,
  roundInputNumber: `[ERROR] 시도할 횟수는 숫자여야 합니다.`,
  roundInputPositive: `[ERROR] 시도할 횟수는 0보다 커야 합니다.`,
});
