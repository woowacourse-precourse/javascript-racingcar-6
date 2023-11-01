export const GAME_MESSAGE = Object.freeze({
  inputName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  inputNumber: "시도할 횟수는 몇 회인가요?",
  printResult: "실행 결과",
  printWinner: "최종 우승자 : ",
});

export const ERROR_MESSAGE = Object.freeze({
  emptyInput: "[ERROR] 입력한 값이 존재하지 않습니다.",
  hasWhiteSpace: "[ERROR] 입력한 값에 공백이 존재합니다.",
  exceedNameLimit: "[ERROR] 자동차의 이름은 5글자 이하만 가능합니다.",
  duplicateName: "[ERROR] 중복된 자동차의 이름이 존재합니다.",
  notNumber: "[ERROR] 자동차 이동 횟수는 숫자만 가능합니다.",
  notNaturalNumber: "[ERROR] 자동차 이동 횟수는 1이상의 자연수만 가능합니다.",
});
