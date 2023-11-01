export const MESSAGE = {
  START_CAR_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  START_NUMBER_OF_ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
  GAME_PROGRESS: "\n실행 결과\n",
  GAME_RESULT: "최종 우승자 : ",
};

export const ERROR = {
  NAME_RANGE_ERROR: "[ERROR] 자동차 이름은 1~5 글자로 입력해주세요.",
  NAME_DUPLICATION_ERROR: "[ERROR] 자동차 이름 중 중복된 이름이 있습니다.",
  BLANK_ERROR: "[ERROR] 공백 없이 입력해야합니다.",
  COMMA_ERROR: "[ERROR] 자동차의 이름은 쉼표로 시작되거나 끝나면 안됩니다.",
  NUMBER_RANGE_ERROR: "[ERROR] 시도 횟수는 1 이상의 자연수로 입력해주세요.",
  NUMBER_ONLY_ERROR: "[ERROR] 시도 횟수는 숫자만 입력 가능합니다.",
};
