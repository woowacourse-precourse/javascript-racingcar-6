import { ERROR_CONVENTION } from "./convention.js";

export const systemMessage = {
  GAME_START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_TRY_COUNT: "시도할 회수는 몇회인가요?",
  RESULT: "실행 결과",
  WINNER: "최종 우승자: ",
};

export const errorCarMessage = {
  INVALID_CAR_NAME_EMPTY: `${ERROR_CONVENTION} 자동차 이름은 필수입니다.`,
  INVALID_CAR_NAME_LENGTH: `${ERROR_CONVENTION} 자동차 이름은 5자 이하만 가능합니다.`,
  INVALID_CAR_NAME_DUPLICATE: `${ERROR_CONVENTION} 자동차 이름을 중복되지 않게 설정해주세요.`,
  INVALID_CAR_NAME_SPACED: `${ERROR_CONVENTION} 자동차 이름 사이에 공백이 올 수 없습니다.`,
};

export const errorTryCountMessage = {
  INVALID_TRY_COUNT_ISNUMBER: `${ERROR_CONVENTION} 시도 횟수는 숫자만 입력 가능합니다.`,
  INVALID_TRY_COUNT_MIN: `${ERROR_CONVENTION} 시도 횟수는 1 이상의 숫자만 가능합니다.`,
  INVALID_TRY_COUNT_TYPE: `${ERROR_CONVENTION} 시도 횟수는 정수 형태의 숫자만 가능합니다.`,
};
