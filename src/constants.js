export const RACE_GAME_OUTPUT_MESSAGE = {
  roundResultInit: "실행 결과",
  winners: "최종 우승자",
  progressStatus: "-",
};

export const RACE_GAME_INPUT_MESSAGE = {
  enterCarNames:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  enterTotalRound: "시도할 횟수는 몇 회인가요?\n",
};

export const ERROR_MESSAGE = {
  isNotNumber: "정수를 입력해주세요",
  isCarListNull: "1개 이상의 자동차 이름을 입력해주세요",
  invalidLength: (maxLength) =>
    `[ERROR] 자동차의 이름은 ${maxLength}자 이하만 가능합니다.`,
  isCarNameNull: "자동차의 이름은 필수입니다.",
  isNotOverZero: "0보다 큰 정수를 입력해주세요",
};

export const MOVE_THRESHOLD = 4;

export const MAX_CAR_NAME_LENGTH = 5;
