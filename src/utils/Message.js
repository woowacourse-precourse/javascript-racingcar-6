const ERROR_MESSAGES = Object.freeze({
  DEFAULT_ERROR: "[ERROR]",
  IS_NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하여야 합니다.",
  IS_NUMBER: "[ERROR] 유효한 숫자가 아닙니다."
});

const GAME_MESSAGES = Object.freeze({
  CAR_NAME_INPUT_PROMPT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n",
  ATTEMPTS_INPUT_PROMPT: "시도할 횟수는 몇 회인가요? \n"
});

export { ERROR_MESSAGES, GAME_MESSAGES };
