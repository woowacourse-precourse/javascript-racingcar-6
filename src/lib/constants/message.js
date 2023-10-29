export const GAME_MESSAGE = {
  CARNAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  COUNT_INPUT: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행 결과",
  WINNER: "최종 우승자",
};

export const ERROR_MESSAGE = {
  INPUT_EXIST_ERROR: "[ERROR] 값을 입력해주세요.",
  INPUT_CAR_NAME_LIST_LENGTH_ERROR:
    "[ERROR] 최대 5개의 자동차 이름을 입력하세요.",
  INPUT_CAR_NAME_LENGTH_ERROR: "[ERROR] 자동차 이름은 5자 이하로 입력하세요.",
  INPUT_COUNT_LENGTH_ERROR: "[ERROR] 숫자 1개만 입력하세요.",
  INPUT_DATA_TYPE_ERROR: "[ERROR] 숫자만 입력하세요.",
  POSITIVE_NUMBER_ERROR: "[ERROR] 양수만 입력하세요.",
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
