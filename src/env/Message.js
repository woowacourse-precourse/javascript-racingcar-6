export const Message = Object.freeze({
  START: "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n",
  COUNT_INPUT: "시도할 횟수는 몇 회인가요?\n",
  RESULT_MESSAGE: "실행결과",
  WINNER_MESSAGE: "최종 우승자 :",
});

export const ERROR = Object.freeze({
  CAR_NAME_LENGTH: "[ERROR] 5자리이하의 이름으로 입력해주세요.",
  INVALID_DUPLICATE: "[ERROR] 중복된 자동차 이름이 입력되었습니다.",
  INVALID_INPUT: "[ERROR] 정수로 입력해주세요.",
});
