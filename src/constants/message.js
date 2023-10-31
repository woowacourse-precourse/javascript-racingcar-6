export const ERROR_MESSAGE = {
  INVALID_NAME_LENGTH: "[ERROR]이름은 5자 이내여야 합니다.",
  HAVE_SAME_NAME: "[ERROR]중복되는 이름이 있습니다.",
  INVALID_ROUND_RANGE: "[ERROR]1이상의 정수를 입력해 주세요.",
  NO_INPUT: "[ERROR]아무것도 입력하지 않았습니다.",
  TOO_FEW_NAME: `[ERROR]2개 이상으로 입력해주세요.`,
  TOO_MANY_NAMES: (max) => {
    return `[ERROR]${max}개 이하로 입력해주세요.`;
  },
  TOO_MANY_ROUND: (max) => {
    return `[ERROR]${max}이하의 수를 입력해주세요.`;
  },
};

export const GAME_MESSAGE = {
  ASK_CARS_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ASK_COUNT_NUMBER: "시도할 횟수는 몇 회인가요?",
  PRINT_WINNER: (names) => {
    return `최종 우승자 : ${names}`;
  },
};
