export const DEFAULT = {
  MIN_RANGE: 0,
  MAX_RANGE: 9,
  CARS_MIN_LENGTH: 2,
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 5,
  MOVABLE_MIN: 4,
};

export const LOG = {
  INPUT_CAR: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ROUND: '시도할 횟수는 몇 회인가요?\n',
  RUN: '실행 결과',
  WINNER: '최종 우승자 : ',
};

export const ERROR = {
  NOT_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  NOT_PLURAL: '[ERROR] 2대 이상의 자동차를 입력해주세요.',
  NOT_UNDER_LEN: '[ERROR] 이름은 5자 이하로 입력해주세요.',
  NOT_UNIQUE: '[ERROR] 중복된 이름이 있습니다.',
  NOT_CAR_OR_ROUND: '[ERROR] 자동차 이름과 시도 횟수만 입력 가능합니다.',
};
