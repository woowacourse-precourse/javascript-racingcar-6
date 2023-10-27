const INQUIRY = {
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_CHANCE: '시도할 횟수는 몇 회인가요?\n',
};

const ERROR = {
  INVALID_NAME: '[ERROR] 자동차 이름은 알파벳과 숫자로만 구성되어야 합니다.',
  TOO_LONG_NAME: '[ERROR] 자동차 이름은 5자 이하로 설정되어야 합니다.',
  DUPLICATED_NAME: '[ERROR] 중복된 자동차 이름이 존재합니다.',
  NOT_NUMBER: '[ERROR] 시도 횟수는 유효한 숫자로 설정되어야 합니다.',
  NOT_INTEGER: '[ERROR] 시도 횟수는 정수로 설정되어야 합니다.',
  NOT_POSITIVE: '[ERROR] 시도 횟수는 0 이상의 정수로 설정되어야 합니다.',
};

const RESULT = {
  OUTPUT: '실행 결과',
  WINNERS: '최종 우승자 :',
};

const UTILITY = {
  EMPTY: '',
};

export { INQUIRY, ERROR, RESULT, UTILITY };
