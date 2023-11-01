const error = {
  COMMA_POSITION: "콤마로 시작하거나 콤마로 끝나면 안됩니다.",
  CONTINUOUS_COMMA: "콤마를 두 번 이상 연속으로 사용하면 안됩니다.",
  NAME_LENGTH_LIMIT: "자동차의 이름은 5자 이하만 가능합니다.",
  EMPTY_INPUT: "빈공간이 없이 작성해주세요.",
  INVALID_TYPE: "숫자를 입력하세요.",
};

const read = {
  CAR_LIST: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ATTEMPT: "시도할 횟수는 몇 회인가요?",
};

const MESSAGE = {
  error,
  read,
};

export default MESSAGE;
