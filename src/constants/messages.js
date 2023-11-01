import { CAR_NAMES, CARS, RACING } from "../constants/carRacing.js";

export const GUIDE_MESSAGE = Object.freeze({
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_NUMBERS_OF_MOVES: "시도할 횟수는 몇 회인가요?",
  NOTICE_OF_EXECUTION_RESULT: "\n실행 결과",
  OUTPUT_FINAL_WINNER: "최종 우승자 :",
});

const ERROR_MESSAGE_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  // 자동차 이름 입력에 대한 에러를 처리한다.
  INPUT_CARS_LESS_THAN_MIN: `${ERROR_MESSAGE_PREFIX} ${CARS.MIN_COUNT_OF_CARS}대 이상의 자동차를 입력해주세요.`,
  INPUT_CAR_NAMES_TOO_SHORT: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CARS.MIN_CAR_NAME_LENGTH}자 이상 입력해주세요.`,
  INPUT_CAR_NAMES_TOO_LONG: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CARS.MAX_CAR_NAME_LENGTH}자 이하로 입력해주세요.`,
  INPUT_CAR_NAME_IS_DUPLICATED: `${ERROR_MESSAGE_PREFIX} 자동차 이름이 중복되지 않게 입력해주세요.`,

  // 시도할 횟수 입력에 대한 에러를 처리한다.
  IS_NAN: `${ERROR_MESSAGE_PREFIX} 숫자만 입력 가능합니다.`,
  IS_INTEGER: `${ERROR_MESSAGE_PREFIX} 정수를 입력해주세요.`,
  LESS_THAN_MIN: `${ERROR_MESSAGE_PREFIX} ${RACING.MIN_ATTEMPTS_NUMBER} 이상의 수를 입력해 주세요.`,
  MORE_THAN_MAX: `${ERROR_MESSAGE_PREFIX} ${RACING.MAX_ATTEMPTS_NUMBER} 이하의 수를 입력해 주세요.`,
});
