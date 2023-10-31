const SETTING = Object.freeze({
  MIN_RANDOM_NUMBER: 0,
  MIN_INPUT_NUMBER: 1,
  MIN_NAME_LENGTH: 1,
  MIN_NAME_NUMBER: 2,
  TARGET_FORWARD_NUMBER: 4,
  MAX_NAME_LENGTH: 5,
  MAX_RANDOM_NUMBER: 9,
});

const SCORE = Object.freeze({
  FORWARD: '-',
});

const MESSAGE = Object.freeze({
  INPUT_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  INPUT_NUMBER: '시도할 횟수는 몇 회인가요?',
  RESULT: '실행 결과',
  WINNER: '최종 우승자 : ',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_MULTIPLE_NAMES: '[ERROR] 쉼표를 기준으로 2개 이상의 이름을 입력하세요.',
  NOT_NAME_LENGTH: `[ERROR] ${SETTING.MIN_NAME_LENGTH}자 이상 ${SETTING.MAX_NAME_LENGTH}자 이하의 이름을 입력하세요.`,
  NOT_UNIQUE: '[ERROR] 중복된 이름이 있습니다.',
  NOT_NUMBER: '[ERROR] 숫자가 아닙니다.',
  NOT_RANGE: `[ERROR] ${SETTING.MIN_INPUT_NUMBER} 이상의 숫자를 입력하세요.`,
  NOT_NATURAL_NUMBER: '[ERROR] 자연수가 아닙니다.',
  NOT_SAFE_INTEGER: `[ERROR] 숫자가 너무 큽니다.`,
});

export { SETTING, SCORE, MESSAGE, ERROR_MESSAGE };