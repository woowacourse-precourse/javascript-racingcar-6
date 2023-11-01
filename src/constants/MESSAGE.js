const INPUT = {
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  COUNT: "시도할 횟수는 몇회인가요?\n",
};

const SIGNAL = {
  DISTANCE: "-",
  SEPARATOR: ",",
};

const OUTPUT = {
  RESULT_MESSAGE: "실행 결과",
  WINNER: (winnerList) => "최종 우승자: " + winnerList.join(", "),
  DISTANCE_SIGNAL: "-",
  RESULT: (car) => `${car.carName} : ${SIGNAL.DISTANCE.repeat(car.distance)}`,
};

const ERROR = {
  EMPTY_INPUT: "[ERROR] 입력값이 비어있습니다.",
  NOT_NUMBER_INPUT: "[ERROR] 숫자가 아닌 값이 입력되었습니다.",
  INVALID_COUNT_INPUT: "[ERROR] 0보다 큰 숫자를 입력해주세요.",
  INVALID_CARS_INPUT: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
};

Object.freeze(INPUT, OUTPUT, ERROR, SIGNAL);
export default { INPUT, OUTPUT, ERROR, SIGNAL };
