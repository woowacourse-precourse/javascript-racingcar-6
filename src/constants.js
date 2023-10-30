const MESSAGES = {
  CAR_INPUT_MESSAGE:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
};

const ERRORS = {
  BAD_INPUT: '[ERROR] 자동차 이름이 잘못된 형식으로 입력되었습니다.',
  OVER_LIMIT: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  ONLY_ONE: '[ERROR] 둘 이상의 자동차 이름을 입력해야 합니다.',
  NOT_INTEGER: '[ERROR] 정수 형태로만 입력할 수 있습니다.',
  NOT_CONVERTABLE: '[ERROR] 시도 횟수가 잘못된 형식으로 입력되었습니다.',
  UNSAFE_INTEGER: '[ERROR] 시도 횟수가 너무 큽니다.',
};

const NUMBERS = {
  MOVE_FORWARD: 4,
};

const CONSTANTS = {
  MESSAGES,
  ERRORS,
  NUMBERS,
};

export default CONSTANTS;
