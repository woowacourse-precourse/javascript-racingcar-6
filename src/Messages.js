const Messages = Object.freeze({
  GET_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  GET_TRY_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  RACE_RESULT: "실행 결과\n",
  RACE_MARK: "-",
  WINNER: "최종 우승자 : ",
  ERROR: Object.freeze({
    EXCEED_CAR_NAME: "[ERROR] 자동차 이름은 5자 이하로 작성해주세요",
    WRONG_TRY_NUMBER: "[ERROR] 시도 횟수는 숫자로만 입력해주세요",
  }),
});
