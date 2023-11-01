export const MESSAGES = Object.freeze({
  RESULT: "실행 결과",
  WINNER: (winnerNames) => `최종 우승자 : ${winnerNames}`,
  ERROR: {
    PREFIX: "[ERROR]",
    RULE: "올바르지 않은 레이싱 규칙입니다.",
    CAR: {
      NAME: {
        EMPTY: "자동차 이름으로 빈 문자열을 입력할 수 없습니다.",
        LENGTH: (maxLength) =>
          `자동차 이름은 ${maxLength}글자 이하만 가능합니다.`,
        DUPLICATE: "중복된 자동차 이름이 존재합니다.",
      },
      OFFSET: {
        LENGTH: (maxLength) => `자동차 위치는 ${maxLength}보다 클수 없습니다.`,
      },
    },
    TOTAL_ROUNDS: {
      EMPTY: "시도 횟수를 입력해주세요.",
      TYPE: "시도 횟수는 숫자만 입력할 수 있습니다.",
      LENGTH: "시도 횟수는 0보다 커야합니다.",
      NOT_INTEGER: "시도 횟수는 정수만 입력할 수 있습니다.",
    },
  },
  PLACEHOLDER: {
    CAR: {
      NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    },
    ROUND: "시도할 횟수는 몇 회인가요?",
  },
});
