import { errorMessage } from './utils';

export const ERROR_PREFIX = '[ERROR]';

export const MESSAGE = Object.freeze({
  CAR_NAME: {
    INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ERROR: {
      IS_OVER_FIVE: errorMessage('자동차 하나의 문자열 길이는 5이하이어야 합니다'),
    },
  },
});

export const CAR_NAME_LIMIT = 5;
export const DIVIDER = ',';
