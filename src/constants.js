export const COMMENT = Object.freeze({
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
  ASK_INPUT: "시도할 횟수는 몇 회인가요? ",
});

export const ERROR = Object.freeze({
  NAME: "[ERROR]",
  MESSAGE: {
    INVALID_INPUT: "숫자가 잘못된 형식입니다.",
    ATTEMPT_INPUT: "시도 횟수를 입력해야 합니다.",
    CARS_NAME: "자동차 이름을 입력해야 합니다.",
    ONE_TO_FIVE: "이름은 5자 이하만 가능합니다.",
  },
});
