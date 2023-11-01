export const MESSAGE = Object.freeze({
  INPUT_CAR_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
  GAME_RESULT: "실행 결과",
  WINNER: "최종 우승자",
  INVALID_CAR_NAME: "[ERROR] 1~5 자의 자동차 이름을 입력해 주세요.",
  INVALID_TRY_COUNT: "[ERROR] 자연수를 입력해 주세요.",
  DUPLICATE_CAR_NAME: "[ERROR] 중복된 자동차 이름이 존재합니다.",
});

export const CAR = Object.freeze({
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 5,
  FORWARD_RANGE: [0, 9],
  FORWARD_CONDITION: 4,
});

export default { MESSAGE, CAR };
