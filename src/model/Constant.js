const MESSAGE = Object.freeze({
  RACE_CAR_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  RACE_ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
  RACE_START: "\n실행 결과",
  RACE_WINNER: "최종 우승자 : ",
});

const StaticChar = Object.freeze({
  CAR_NAME_SPLIT: ",",
  CAR_NAME_JOIN: ", ",
  CAR_NAME_BLANK: "",
  CAR_DISTANCE: "-",
});

const StaticNumber = Object.freeze({
  POSSIBLE_CAR_NAME_LENGTH: 4,
  CONDITION_MOVE: 4,
  POSSIBLE_MIN_RACE_ATTEMPT: 1,
});

const ERROR_MESSAGE = Object.freeze({
  INPUT_LENGTH_ERROR: "[ERROR] 입력한 자동차 이름이 5자 이상입니다.",
  INPUT_BLANK_ERROR: "[ERROR] 입력한 값이 공백입니다.",
  INPUT_NUMBER_ERROR: "[ERROR] 입력한 값이 숫자가 아닙니다.",
  INPUT_NUMBER_NEGATIVE_ERROR: "[ERROR] 입력한 값이 자연수가 아닙니다.",
});

export { MESSAGE, StaticChar, StaticNumber, ERROR_MESSAGE };
