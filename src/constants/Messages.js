const MESSAGES = Object.freeze({
  INPUT_CARNAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_TRIAL: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
});

const ERROR_MESSAGES = Object.freeze({
  NUMBER_ERROR: "[ERROR] 올바른 숫자 형식으로 입력해 주세요",
  CARNAME_ERROR: "[ERROR] 올바른 이름 형식으로 입력해 주세요",
});

export { MESSAGES, ERROR_MESSAGES };
