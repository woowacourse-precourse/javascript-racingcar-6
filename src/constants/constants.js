export const RACING_MESSAGE = Object.freeze({
  READ_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  READ_MOVE_COUNT: '시도할 횟수는 몇 회인가요? \n',
});

export const RACING_CAR = Object.freeze({
  START_POSITION: 0,
});

export const RACING_ERROR = Object.freeze({
  MIN_CAR_NAME: 1,
  MAX_CAR_NAME: 5,
  NAME_LENGTH_ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  NAME_EMPTY_ERROR: '[ERROR] 자동차 이름이 비었습니다.',
  MOVE_COUNT_ONLY_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  MOVE_COUNT_POSITIVE_NUMBER:
    '[ERROR] 이동 횟수는 오직 양의 정수만 입력해야 합니다.',
});
