export const TEXT = {
  RESULT: '\n실행 결과',
  INPUT_PARTICIPANT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_NUMBER_OF_ATTEMPTS:
    '시도할 횟수는 몇 회인가요?(1~20 숫자를 입력해주세요)\n',
};

export const CONSTANT = {
  MOVING_FORWARD: 4,
  MAX_NAME_LENGTH: 5,
  MIN_NAME_LENGTH: 1,
  MAX_PARTICIPANT: 5,
  MIN_PARTICIPANT: 1,
  MAX_ATTEMPTS: 20,
  MIN_ATTEMPTS: 1,
};

export const ERROR_MESSAGE = {
  PARTICIPANT_CAR_NAME_ERROR:
    '[ERROR] 자동차 이름은 1자 ~ 5자 사이를 입력해주세요',
  TOTAL_PARTICIPANT_ERROR:
    '[ERROR] 참가자는 1팀 ~ 5팀이 있어야 진행이 가능합니다',
  NUMBER_OF_ATTEMPTS_ERROR: '[ERROR] 시도 횟수는 1 ~ 20 사이로 입력해주세요',
};
