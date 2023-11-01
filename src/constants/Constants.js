export const ERROR_MSG = {
  EMPTY_CAR_NAME: "[ERROR] 자동차 이름을 입력해 주세요.",
  INVALID_CAR_NAME_LENGTH:
    "[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.",
  DUPLICATE_CAR_NAME: "[ERROR] 자동차 이름은 중복되지 않아야 합니다.",
  EMPTY_RACE_COUNT: "[ERROR] 시도할 횟수를 입력해 주세요.",
  INVALID_RACE_COUNT: "[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.",
};

export const INPUT_MSG = {
  CAR_NAMES: "자동차 이름을 입력해주세요. (이름은 쉼표(,)로 구분)",
  RACE_COUNT: "시도할 횟수는 몇 회인가요?",
};

export const OUTPUT_MSG = {
  RESULT: "실행 결과",
  WINNER: "최종 우승자 :",
};

export const MAGIC_NUM = {
  MIN_CAR_NAME: 1,
  MAX_CAR_NAME: 5,
  MIN_RACE_COUNT: 1,
  RANDOM_RANGE: [0, 9],
  MOVE_THRESHOLD: 4,
};
