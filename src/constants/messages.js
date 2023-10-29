export const ERROR_MSG = {
  INVALID_CAR_NAME_LENGTH:
    "[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.",
  DUPLICATED_CAR_NAME: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
  INVALID_CAR_NAME: "[ERROR] 자동차 이름이 잘못된 형식입니다.",
  INVALID_MOVE_COUNT: "[ERROR] 시도할 횟수가 잘못된 형식입니다.",
  TOO_BIG_MOVE_COUNT:
    "[ERROR] 가능한 이동 횟수 범위는 1 ~ 2,147,483,647 입니다.",
};

export const INPUT_MSG = {
  CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  MOVE_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MSG = {
  RESULT: "\n실행 결과\n",
  WINNER: "최종 우승자 : ",
};
