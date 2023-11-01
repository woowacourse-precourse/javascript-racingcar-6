const ERROR_HEADER = "[ERROR]";

export const ERROR_TYPE = {
  EMPTY_NAME: `${ERROR_HEADER} 이름을 입력해주세요.`,
  NAME_LENGTH: `${ERROR_HEADER} 자동차의 이름은 5자 이하만 가능합니다.`,
  EMPTY_ATTEMPTS: `${ERROR_HEADER} 시도 횟수를 입력해주세요.`,
  INTEGER_ATTEMPTS: `${ERROR_HEADER} 시도 횟수는 정수만 가능합니다.`,
};

export const GAME_MESSAGE = {
  CAR_NAMES: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)",
  ATTEMPTS: "시도할 횟수는 몇 회인가요?",
  WINNER: "최종 우승자: ",
};