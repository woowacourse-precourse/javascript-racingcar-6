export const RANDOM = {
  MIN: 0,
  MAX: 9,
};

export const GAME = {
  CAR_NAME_INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '실행 결과',
  WINNER: '최종 우승자 : ',
};

const PREFIX = '[ERROR] ';

export const ERROR = {
  EMPTY_CAR_NAME: `${PREFIX}자동차 이름을 입력하지 않았습니다.`,
  INVALID_CAR_NAME: `${PREFIX}유효하지 않은 자동차 이름 형식입니다.`,
  DUPLICATE_CAR_NAME: `${PREFIX}중복되는 자동차 이름이 존재합니다.`,
  OVER_CAR_NAME_LENGTH: `${PREFIX}자동차 이름이 공백 포함 5자 이하가 아닙니다.`,
  INVALID_COUNT: `${PREFIX}시도할 횟수를 입력하세요.`,
  MUST_ENTER_A_NUMBER_OVER_ZERO: `${PREFIX}시도 횟수는 0보다 큰 수여야 합니다.`,
};
