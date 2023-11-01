import { CAR_NAME, TOTAL_ROUND_MIN_COUNT } from './racingGame.js';

export const INPUT_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TOTAL_ROUNDS: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  RESULT_TITLE: '\n실행결과',
  EMPTY: '',
  MOVING_INDICATOR: '-',
  WINNER: '최종 우승자 :',
};

export const ERROR_MESSAGE = {
  CAR_NAME_LENGTH_LIMIT: `[ERROR] 자동차 이름은 ${CAR_NAME.LENGTH_LIMIT}자 이하여야 합니다.`,
  CAR_NAME_DUPLICATED: '[ERROR] 중복되는 자동차 이름이 존재합니다.',
  CAR_NAME_EMPTY: '[ERROR] 자동차 이름은 빈값이 될 수 없습니다',
  CAR_NAME_INCLUDE_EMPTY: '[ERROR] 자동차 이름에 공백을 사용할 수 없습니다.',
  CAR_NAME_INCLUDE_BAD_WORD: '[ERROR] 자동차 이름에 욕설을 포함할 수 없습니다.  ❌ : ',
  TOTAL_ROUNDS_INVALID: `[ERROR] 시도 횟수는 ${TOTAL_ROUND_MIN_COUNT}이상의 숫자만 입력 가능합니다.`,
};
