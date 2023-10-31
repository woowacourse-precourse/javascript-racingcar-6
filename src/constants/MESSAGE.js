const INPUT = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?',
});

const OUTPUT = Object.freeze({
  NO_WINNER: '승자없음!🏎️',
  WINNER: '최종 우승자',
  RACE_RESULT: '실행결과',
});

const VALIDATION = Object.freeze({
  NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요!',
  CAR_COUNT: '[ERROR] 자동차는 두 대 이상 입력해주세요!',
  TRY_COUNT: '[ERROR] 입력값이 올바르지 않습니다. 숫자만 입력해주세요!',
});

export { INPUT, OUTPUT, VALIDATION };
