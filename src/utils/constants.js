const MESSAGE = Object.freeze({
  INPUT_CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_TRY_COUNT: "시도할 횟수는 몇 회인가요?",
  OUTPUT_RESULT: "실행 결과",
  OUTPUT_WINNER: "최종 우승자 : ",
});

const ERROR_MESSAGE = Object.freeze({
  HEADER: "[ERROR]",
  INVALID_CAR_NAMES: `자동차 이름은 ${GAME_SETTING.MIN_CAR_NAME_LENGTH}자 이상, ${GAME_SETTING.MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
  INVALID_TRY_COUNT: `시도 횟수는 ${GAME_SETTING.MIN_TRY_COUNT}이상의 숫자만 가능합니다.`,
});

const GAME_SETTING = Object.freeze({
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,
  MIN_TRY_COUNT: 1,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
  AVAILABLE_RANDOM_NUMBER: 4,
});

export { MESSAGE, ERROR_MESSAGE, GAME_SETTING };
