import GAME_OPTION from './gameOption.js';

const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  hasSpace: '공백을 입력할 수 없습니다.',
  hasWrongName: '자동차 이름이 잘못된 형식입니다.',
  notInNameLengthRange: `자동차 이름은 ${GAME_OPTION.minCarNameLength}~${GAME_OPTION.maxCarNameLength}자 만 가능합니다.`,
  hasDuplicateName: '중복된 자동차 이름이 존재합니다.',
  isNotNumber: '입력받은 횟수가 숫자가 아닙니다.',
});

export default ERROR_MESSAGE;
