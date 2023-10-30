export const MESSAGE = {
  START: "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n",
  ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
  RESULT: "실행 결과",
  END: "최종 우승자 : ",
};

export const ERROR_MESSAGE = {
  ERROR_NOT_NUMBER: "[ERROR] 숫자를 입력해주세요.",
  ERROR_OUT_OF_RANGE: "[ERROR] 0~9사이 값을 입력해주세요.",
  ERROR_LESS_THAN_ZERO: "[ERROR] 0보다 큰 값을 입력해주세요.",
  ERROR_NAME_CONFIGURATION: "[ERROR] 참가자 이름이 영어가 아닙니다.",
  ERROR_NAME_LENGTH: "[ERROR] 참가자 이름은 1~5글자로 작성해주세요.",
};

export const NUMBER = {
  MIN: 0,
  MAX: 9,
  STANDARD: 4,
};
