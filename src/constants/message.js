export const MESSAGE = Object.freeze({
  START: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  COUNT: '시도할 횟수는 몇 회인가요?\n',
  RUN: '\n실행 결과',
  WINNERL: '최종 우승자 : ',
  MOVE: '-',
});

export const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_ERROR: '[ERROR] ,를 먼저 입력하면은 안됩니다.',
  CAR_NAME_LENGTH: '[ERROR] 자동차의 이름은 1자 이상 5자 이하만 가능합니다.',
  CAR_NAME_DUPLICATED: '[ERROR] 자동차 이름은 중복되어서는 안됩니다.',
  CAR_NAME_ONLY_ENGLISH_NUMBER: '[ERROR] 차량 이름은 영문, 숫자만 가능합니다.',
  CAR_COUNTING: '[ERROR] 최소 2대 최대 100대의 차량 이름을 입력하세요',
  TURN_ERROR: '[ERROR] 레이싱 게임 진행을 위해 1 ~ 100 사이의 자연수를 입력해주세요',
});
