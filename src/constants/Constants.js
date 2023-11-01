export const ERROR_MSG = {
  INVALID_CAR_NAME:
    "[ERROR] 자동차 이름은 5자 이하만 가능하며, 쉼표(,)로 구분해야 합니다.",
  INVALID_RACE_COUNT: "[ERROR] 시도할 횟수는 숫자여야 합니다.",
};

export const INPUT_MSG = {
  CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
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
