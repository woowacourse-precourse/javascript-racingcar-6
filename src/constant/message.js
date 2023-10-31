const INPUT_MESSAGE = Object.freeze({
  CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: "\n실행 결과",
  WINNER: "최종 우승자 : ",
  NEWLINE: "",
});

const ERROR_MESSAGE = Object.freeze({
  NUMBER: "[ERROR] 정수만 입력가능합니다.",
  CAR_LENGTH: "[ERROR] 자동차의 길이는 1~5자 사이여야합니다.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
