export const MESSAGE = Object.freeze({
  NAME_INPUT: '이름은 쉼표(,) 기준으로 구분\n',
  NUMBER_INPUT: '시도할 횟수는 몇 회인가요?\n',
  RESULT_WINNER: '(이)가 최종 우승했습니다.',
});

export const ERRMSG = Object.freeze({
  OVER_FIVE_LETTER: `[ERROR] 이름은 5글자를 넘어선 안됩니다.`,
  DUPLICATED_NAME: '[ERROR] 중복된 이름이 있습니다.',
  HAS_SPACE: '[ERROR] 띄어쓰기 미포함입니다.',
  NOT_VALID_NUMBER: '[ERROR] 유효하지 않은 숫자 입니다.',
});

export const SIGN = Object.freeze({
  DECIMAL: ',',
  DASH: '-',
  SPACE: ' ',
  EMPTY_SPACE: '',
  REGEXP_REMOVE_SPACE: /(\s*)/g,
});

export const VALUE = Object.freeze({
  INITIAL_DISTANCE: 0,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  NEXT_MOVE_CONDITION: 4,
  LIMIT_LEETER_LEN: 5,
  MIN_REPEAT_NUMBER: 0,
});
