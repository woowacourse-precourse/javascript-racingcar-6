const MIN_MOVE_THRESHOLD = 4;

const CHECK = {
  MAX_CAR_NAME_LENGTH: 5,
  MIN_NUMBER_OF_CARS: 2,
};

const RESULT_MESSAGE = {
  EXECUTION_RESULT: "실행 결과",
  WINNER: "최종 우승자",
};

const USER_PROMPT = {
  CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ATTEMPTS: "시도할 횟수는 몇 회인가요?",
};

const ERROR_MESSAGE = {
  NAME_LENGTH_ERROR: "[ERROR] 각 자동차 이름은 5자 이하만 입력해야 합니다.",
  MINIMUM_CARS_ERROR:
    "[ERROR] 자동차 경주를 위해 최소 2개의 이름이 존재해야 합니다.",
  DUPLICATE_NAMES_ERROR: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
  INVALID_NUMBER: "[ERROR] 입력 값 확인: 자연수를 입력하여야 합니다.",
};

export {
  MIN_MOVE_THRESHOLD,
  CHECK,
  RESULT_MESSAGE,
  USER_PROMPT,
  ERROR_MESSAGE,
};
