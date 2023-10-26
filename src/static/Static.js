const GuideMessage = Object.freeze({
  INPUT_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_TIMES: "시도할 횟수는 몇 회인가요?",
  RESULT_MESSAGE: "\n실행 결과",
  WINNER_MESSAGE: "최종 우승자 : ",
});

const ErrorMessage = Object.freeze({
  NAME_LENGTH_ERROR: "[ERROR] 자동차의 이름은 5자를 넘어갈 수 없습니다.",
  TIMES_LENGTH_ERROR: "[ERROR] 시도할 횟수는 숫자 한 개만 입력할 수 있습니다.",
  TIMES_NUMBER_ERROR: "[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.",
});

const StaticString = Object.freeze({
  NAME_LENGTH_LIMIT: 5,
  CAN_MOVE_CONDITION: 4,
  RANDOM_MIN_NUMBER: 0,
  RANDOM_MAX_NUMBER: 9,
  MOVE: "-",
});

export default { GuideMessage, ErrorMessage, StaticString };
