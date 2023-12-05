export const INPUT_MESSAGE = {
  getCarNames:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  getTryCount: "시도할 횟수는 몇 회인가요?\n",
};

export const CAR_NAME_MAX_LENGTH = 5;

export const ERROR_MESSAGE = {
  inValidCarArray: "[ERROR] 유효한 자동차 이름이 아닙니다.",
  inValidCarName: `[ERROR] 자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  inValidNumber: "[ERROR] 숫자가 잘못된 형식입니다.",
};

export const DELIMITER = ",";

export const MOVE = "-";

export const MOVE_THRESHOLD = 4;

export const OUTPUT_MESSAGE = {
  newLine: "",
  startGame: "실행 결과",
  winner: "최종 우승자",
};

Object.freeze(INPUT_MESSAGE);
Object.freeze(ERROR_MESSAGE);
Object.freeze(OUTPUT_MESSAGE);
