const inputQuery = {
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
};

const errorString = (message) => `[ERROR] ${message}`;

const errorMessage = {
  NOT_STRING: errorString("값이 문자열 타입이 아닙니다."),
  NOT_ARRAY: errorString("값이 배열 타입이 아닙니다."),
  NOT_CARS: errorString("배열에 Car 클래스의 인스턴스가 아닌 요소가 포함되어 있습니다."),

  LESS_THEN_TWO_CARS: errorString("경주에 참가하는 자동차는 2대 이상이어야 합니다."),

  OVER_MAX_LENGTH: (maxLength) => errorString(`길이가 ${maxLength} 이하여야 합니다.`),
};

export { inputQuery, errorMessage };
