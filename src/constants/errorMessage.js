import GAME_OPTION from './gameOption.js';

const ERROR_MESSAGE = Object.freeze({
  PREFIX: '[ERROR]',
  HAS_SPACE: '공백을 입력할 수 없습니다.',
  HAS_WRONG_NAME_FORMAT: '자동차 이름이 잘못된 형식입니다.',
  NAME_OUT_OF_RANGE: `자동차 이름은 ${GAME_OPTION.MIN_CAR_NAME_LENGTH}~${GAME_OPTION.MAX_CAR_NAME_LENGTH}자 만 가능합니다.`,
  DUPLICATE_NAME: '중복된 자동차 이름이 존재합니다.',
  NOT_INTEGER: '횟수가 정수 숫자가 아닙니다.',
  NEGATIVE_INTEGER: '횟수는 1 이상이여야 합니다.',
});

export default ERROR_MESSAGE;
