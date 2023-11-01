const GAME_SETTING = Object.freeze({
    MIN_CAR_NAME_LENGTH: 1,
    MAX_CAR_NAME_LENGTH: 5,
    MIN_TRY_COUNT: 1,
    MIN_RANDOM_NUMBER: 0,
    MAX_RANDOM_NUMBER: 9,
    AVAILABLE_RANDOM_NUMBER: 4,
  });
  
  const MESSAGE = Object.freeze({
    INPUT_CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    INPUT_TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
    OUTPUT_RESULT: "\n실행 결과",
    OUTPUT_WINNER: "최종 우승자 : ",
  });
  
  const ERROR_MESSAGE = Object.freeze({
    HEADER: "[ERROR]",
    EMPTY_INPUT: "입력값이 없습니다.",
    INVALID_CAR_NAME: `자동차 이름은 ${GAME_SETTING.MIN_CAR_NAME_LENGTH}자 이상, ${GAME_SETTING.MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
    DUPLICATED_CAR_NAME: "중복된 자동차 이름이 존재합니다.",
    INVALID_TRY_COUNT: `${GAME_SETTING.MIN_TRY_COUNT}이상의 숫자를 입력해주세요.`,
  });
  
  const STATE_KEY = Object.freeze({
    GAME: "game",
  });
  
  export { MESSAGE, ERROR_MESSAGE, GAME_SETTING, STATE_KEY };