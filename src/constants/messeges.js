const MESSEGE = Object.freeze({
  carNamesInput:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  roundNumInput: "시도할 횟수는 몇 회인가요?\n",
  excutionResult: "\n실행 결과",
  errorCarNumber: "[ERROR] 자동차 2대 이상부터 경주를 할 수 있습니다.",
  errorCarName:
    "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다.",
  errorRoundNumIsNumber: "[ERROR] 시도할 횟수는 숫자여야 합니다.",
  errorRoundNumIsInteger: "[ERROR] 시도할 횟수는 1~9 사이의 정수여야 합니다.",
});

export default MESSEGE;
