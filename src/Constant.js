export const GAME = {
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,
  MIN_CAR_NUMBER_TO_RACE: 2,
};

export const ERROR = {
  PREFIX: '[ERROR]',
  CAR_NAME_BLANK: '자동차 이름에 공백이 들어갈 수 없습니다.',
  CAR_NAME_NOT_ENOUGH: '자동차 수가 충분하지 않습니다.',
  CAR_NAME_DUPLICATED: '자동차 이름은 중복되지 않아야 합니다.',
  CAR_NAME_INVALID_LENGTH: `자동차 이름은 1글자 이상 ${GAME.MAX_CAR_NAME_LENGTH}글자 이하입니다.`,
  TRY_COUNT_NOT_A_NUMBER: '시도 횟수는 숫자로 입력해주세요.',
  TRY_COUNT_NOT_POSITIVE: '시도 횟수는 1회 이상이어야 합니다.',
};

export const MESSAGE = {
  GET_CAR_NAME:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  GET_TRY_COUNT: '시도할 회수는 몇회인가요?',
};
