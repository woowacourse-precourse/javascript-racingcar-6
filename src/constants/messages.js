const INPUT_QUERY = {
  carNames: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)" + "\n",
  roundNumbers: "시도할 횟수는 몇 회인가요?" + "\n",
};

const OUTPUT_MESSAGE = {
  SHOW_RESULT: "실행 결과",
};

const errorString = (message) => `[ERROR] ${message}`;

const ERROR_MESSAGE = {
  notString: errorString("값이 문자열 타입이 아닙니다."),
  notNumber: errorString("값이 숫자 타입이 아닙니다."),
  notArray: errorString("값이 배열 타입이 아닙니다."),
  includeNotInt: errorString("정수가 아닌 입력 값이 포함되어 있습니다."),

  notCars: errorString("배열에 Car 클래스의 인스턴스가 아닌 요소가 포함되어 있습니다."),
  duplicateNames: errorString("중복된 이름이 포함되어 있으면 안 됩니다."),

  lessThanMinCarCount: (minCarCount) =>
    errorString(`경주에 참가하는 자동차 수는 최소 ${minCarCount}대 이상이어야 합니다.`),
  moreThenMaxCarCount: (maxCarCount) =>
    errorString(`경주에 참가하는 자동차 수는 최대 ${maxCarCount}대 이하여야 합니다.`),

  lessThanMinRound: (minRoundNumber) =>
    errorString(`경주 라운드 수는 최소 ${minRoundNumber} 이상이어야 합니다.`),
  moreThanMaxRound: (maxRoundNumber) =>
    errorString(`경주 라운드 수는 최대 ${maxRoundNumber} 이하여야 합니다.`),

  overMaxLength: (maxLength) => errorString(`길이가 ${maxLength} 미만이어야 합니다.`),
  underMinLength: (minLength) => errorString(`길이가 ${minLength} 초과여야 합니다.`),
};

export { INPUT_QUERY, OUTPUT_MESSAGE, ERROR_MESSAGE };
