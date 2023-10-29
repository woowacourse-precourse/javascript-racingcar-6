const GameMessage = object.freeze({
  INPUT_CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRY_AMOUNT: "시도할 횟수는 몇 회인가요?\n",
  RACING_RESULT: "실행 결과\n",
  RACING_WINNER: "최종 우승자 : ",

  ERROR: {
    CAR_NOT_INPUTED: "[ERROR] 차의 이름이 입력되지 않았습니다.",
    TOO_LONG_NAME: "[ERROR] 차의 이름은 5자가 넘지 않아야 합니다.",
  },
});

export default GameMessage;
