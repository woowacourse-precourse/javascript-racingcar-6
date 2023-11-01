export const GAME = Object.freeze({
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
  INPUT_NUMBER_OF_ATTEMPTS: "시도 횟수: ",
  RUN_RESULT: "실행결과",
  WINNER: "최종 우승자: ",
  FINISH_THRESHOLD: 0,
  ATTEMPT_DECREASE_AMOUNT: 1,
  MAX_NAME_LENGTH: 5,
});

export const MOVE = Object.freeze({
  FORWARD: 1,
  MOVABLE_THRESHOLD: 4,
  DASH: "-",
});

export const ERROR = Object.freeze({
  INVALID_NUMBER: "[ERROR] 정수를 입력해 주세요.",
  INVALID_NEGATIVE_INTEGER: "[ERROR] 1 이상의 정수를 입력해 주세요.",
  EMPTY_INPUT: "[ERROR] 이름을 입력해 주세요.",
  INVALID_DUPLICATE_NAMES: "[ERROR] 중복된 이름이 있습니다.",
  INVALID_BLANK_NAME: "[ERROR] 이름은 공백이 될 수 없습니다.",
  INVALID_NAME_LENGTH: "[ERROR] 5글자 이하의 이름을 입력해주세요.",
});
