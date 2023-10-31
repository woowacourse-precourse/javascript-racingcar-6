export const GAME_MESSAGE = {
  INPUT_CAR: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRYCOUNT: "시도할 회수는 몇회인가요?\n",
  RESULT: "\n실행 결과",
  WINNER: "최종 우승자: ",
};
Object.freeze(GAME_MESSAGE);

export const ERROR_MESSAGE = {
  CAR_NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  INPUT_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
};
Object.freeze(ERROR_MESSAGE);
