import { CARS_SEPARATOR, CAR, MIN_TRY_COUNT } from "./rule.js";

export const ASK = {
  CARS: `경주할 자동차 이름을 입력하세요.(이름은 ${CARS_SEPARATOR.NAME}(${CARS_SEPARATOR.SYMBOL}) 기준으로 구분)\n`,
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const ERROR = {
  CARS_START_AND_END_WITH_COMMA: `[ERROR] 자동차를 입력할 때 양 끝에 ${CARS_SEPARATOR.NAME}(${CARS_SEPARATOR.SYMBOL})를 입력하면 안됩니다.`,
  CAR_NAME_LENGTH: `[ERROR] 각 자동차의 이름은 길이가 ${CAR.MIN_NAME_LENGTH} 이상, ${CAR.MAX_NAME_LENGTH} 이하여야 합니다.`,
  CARS_LENGTH: `[ERROR] 자동차는 최소 ${CAR.MIN_CARS_LENGTH}개를 생성해야합니다.`,
  CAR_NAME_HAS_BLANK: "[ERROR] 자동차 이름에는 공백을 포함할 수 없습니다.",
  CARS_NAME_DUPLICATED: "[ERROR] 자동차 이름을 중복해서 입력할 수 없습니다.",
  COUNT_IS_NOT_NUMBER: "[ERROR] 실행 횟수는 숫자만 입력할 수 있습니다.",
  COUNT_LESS_THAN_MIN: `[ERROR] 실행 횟수는 ${MIN_TRY_COUNT} 이상만 가능합니다.`,
};

export const MESSAGE = {
  RESULT_PHRASE: "\n실행 결과",
  RACING_RESULT(name, result) {
    return `${name} : ${result}`;
  },
  WINNERS(winners) {
    return `최종 우승자 : ${winners}`;
  },
};
