import { errorMessage } from './utils.js';

export const ERROR_PREFIX = '[ERROR]';

export const MESSAGE = Object.freeze({
  CAR_NAME: {
    INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ERROR: {
      IS_OVER_FIVE: errorMessage('자동차 하나의 문자열 길이는 5이하이어야 합니다'),
      IS_DUPLICATED: errorMessage('중복된 이름이 있습니다. 서로 다른 이름을 입력해주세요.'),
    },
  },
  TRY: {
    INPUT: '시도할 횟수는 몇 회인가요?',
    ERROR: {
      IS_NOT_INPUT: errorMessage('입력 값이 없습니다. 값을 입력해주세요'),
      IS_MINUS: errorMessage('0 이상의 수를 입력해주세요.'),
      IS_NOT_NUMBER: errorMessage('숫자가 아닌 문자열을 입력했습니다. 0 이상의 수를 입력해주세요.'),
    },
  },
});

export const CAR_NAME_LIMIT = 5;
export const DIVIDER = ',';
export const MOVE_CONDITION_MINIMUM_VALUE = 4;
export const RANDOM_NUMBER_RANGE = {
  MIN: 0,
  MAX: 9,
};
