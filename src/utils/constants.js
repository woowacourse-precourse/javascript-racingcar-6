const FORWARD = Object.freeze({
  CONDITION: 4,
  TRUE: 1,
  EXPRESSION: '-',
});

const INPUT_MESSAGE = Object.freeze({
  NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분합니다.)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: '실행 결과',
  WINNERS: '최종 우승자 :',
});

const VALID_LEN = Object.freeze({
  MIN_NAME: 1,
  MAX_NAME: 5,
  MIN_RACE: 1,
  MIN_CAR_NAME: 2,
});

const ERROR_MESSAGE = Object.freeze({
  NAME_DUPLICATE: `[ERROR] 자동차 이름은 중복되지 않아야 합니다.`,
  NAME_LENGTH: `[ERROR] 이름은 1글자 이상, 5글자 이하만 가능합니다.`,
  INVALID_CAR_LENGTH: `[ERROR] 최소 2대 이상의 자동차 이름을 입력해야 합니다.`,
  INVALID_TRY_COUNT_TYPE: `[ERROR] 시도 횟수는 자연수만 가능합니다.`,
  INVALID_TRY_COUNT_NUM: `[ERROR] 시도 횟수는 1 이상의 숫자만 가능합니다.`,
});

export { FORWARD, INPUT_MESSAGE, OUTPUT_MESSAGE, VALID_LEN, ERROR_MESSAGE };
