import { separator, NAME_LENGTH, MIN_CAR_NUMBER } from "./rule.js";

export const ASK_CARS = `경주할 자동차 이름을 입력하세요.(이름은 ${separator.name}(${separator.symbol}) 기준으로 구분)\n`;
export const ASK_TRY_COUNT = "시도할 횟수는 몇 회인가요?";

export const ERROR = {
  CAR_NAME_LENGTH: `[ERROR] 각 자동차의 이름은 길이가 ${NAME_LENGTH} 이하여야 합니다.`,
  CARS_LENGTH: `[ERROR] 자동차는 최소 ${MIN_CAR_NUMBER}개를 생성해야합니다.`,
  CAR_NAME_HAS_BLANK: "[ERROR] 자동차 이름에는 공백을 포함할 수 없습니다.",
  COUNT_IS_NOT_NUMBER: "[ERROR] 실행 횟수는 숫자만 입력할 수 있습니다.",
};
