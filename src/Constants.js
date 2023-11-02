export const MESSAGES = {
  CAR_NAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  TRY_NUMBER_INPUT: "시도할 횟수는 몇 회인가요?",
  WINNER: "최종 우승자 : ",
  ERROR_WRONG_NAME: "[ERROR] 이름이 잘못된 형식입니다.",
};

export const Validation = (name) => {
  if (name.length > 5) throw new Error(MESSAGES.ERROR_WRONG_NAME);
};
