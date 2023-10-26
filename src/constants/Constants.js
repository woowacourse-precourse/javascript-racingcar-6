export const NUMBER_REGEX = /^\d+$/;
export const CAR_NAME_REGEX = /^[a-zA-Z]+(,[a-zA-Z]+)*$/;
export const MIN_NUMBER = 0;
export const MAX_NUMBER = 9;

export const GAME_MESSAGES = {
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ATTEMPTS: "시도할 횟수는 몇 회인가요?",
  RESULT: "실행결과",
};

export const ERROR_MESSAGES = {
  EMPTY_INPUT: "[ERROR] 입력값이 존재하지 않습니다.",
  NOT_NUMBER: "[ERROR] 반드시 숫자만 입력해야 합니다.",
  NOT_CAR_NAME: "[ERROR] 자동차의 이름이 잘못되었습니다.",
  OUT_OF_RANGE: "[ERROR] 반드시 자동차의 이름은 5자 이하여야 합니다.",
  DUPLICATION_INPUT: "[ERROR] 입력된 자동차의 이름이 중복됩니다",
};
