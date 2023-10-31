import { CAR_NAME_LENGTH } from '../setting.js';

const ERROR_PREFIX = '[ERROR] ';

const CAR_ERROR_MESSAGE = Object.freeze({
  LENGTH: `자동차의 이름은 ${CAR_NAME_LENGTH.MIN}자 이상 ${CAR_NAME_LENGTH.MAX}자 이내로 구성되어야 합니다.`,
  DUPLICATION: '중복된 자동차의 이름이 존재합니다.',
});

const ATTEMPT_ERROR_MESSAGE = Object.freeze({
  NOT_NUMERIC: '시도 횟수는 숫자만 입력 가능합니다.',
  NOT_POSITIVE: '시도 횟수는 1이상의 정수만 가능합니다.',
});

const SPACE_ERROR_MESSAGE = '입력에 공백이 포함될 수 없습니다.';

export {
  ERROR_PREFIX,
  CAR_ERROR_MESSAGE,
  ATTEMPT_ERROR_MESSAGE,
  SPACE_ERROR_MESSAGE,
};
