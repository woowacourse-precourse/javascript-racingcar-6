const PRINT_MESSAGE = Object.freeze({
  inputNames:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  inputTries: "시도할 횟수는 몇 회인가요?\n",
  resultMessage: "\n실행 결과",
  winnerMessage: "최종 우승자",
  moveMarking: "-",
});

const ERROR_MESSAGE = Object.freeze({
  nameLengthError: "[ERROR] 자동차의 이름은 5자를 넘어갈 수 없습니다.",
  nameInputError: "[ERROR] 자동차의 이름을 한 개이상 입력해주세요",
  nameDuplicateError: "[ERROR] 자동차의 이름은 중복될 수 없습니다.",
  nameContainGapError: "[ERROR] 자동차의 이름에 공백이 포함될 수 없습니다.",
  triesNumberError: "[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.",
  triesZeroError: "[ERROR] 시도할 횟수는 0이 될 수 없습니다.",
});

const STATIC_NUMBER = Object.freeze({
  nameLengthLimit: 5,
  canMoveCondition: 4,
  randomMinNumber: 0,
  randomMaxNumber: 9,
});

export { PRINT_MESSAGE, ERROR_MESSAGE, STATIC_NUMBER };
