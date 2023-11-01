const COMMENT = Object.freeze({
  INPUT_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  INPUT_LAPS: '시도할 횟수는 몇 회인가요?',
  GAME_RESULT: '실행 결과',
  FINAL_WINNER: '최종 우승자',
});

const SPECIALCHARS = Object.freeze({
  COMMA: ',',
  HYPHEN: '-',
  LINE_BREAK: '\n',
});

const NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
  FOUR: 4,
  SIX: 6,
  TWENTY: 20,
  MIN: 0,
  MAX: 9,
});

export { NUMBER, COMMENT, SPECIALCHARS };
