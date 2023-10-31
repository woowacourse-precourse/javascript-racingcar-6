export const CAR_MESSAGES = {
  INPUT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ERROR: {
    NOT_SPACE: "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다.",
    NOT_OVER_5: "[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.",
    NOT_DUPLICATION: "[ERROR] 자동차 이름에 중복이 있습니다.",
    MUST_OVER_2: "[ERROR] 자동차 이름은 2개 이상 입력해주세요.",
    MUST_INPUT: "[ERROR] 자동차 이름이 공백('') 이어선 안됩니다.",
  },
};

export const NUMBER_MESSAGES = {
  INPUT: "시도할 횟수는 몇 회인가요?",
  ERROR: {
    MUST_NUMBER: "[ERROR] 시도 횟수는 숫자 값만 입력해주세요.",
    NOT_BLANK: "[ERROR] 시도 횟수를 입력하지 않으셨습니다.",
    MUST_OVER_1: "[ERROR] 시도 횟수는 1 이상이어야 합니다.",
    MUST_UNDER_100: "[ERROR] 시도 횟수는 100 미만이어야 합니다.",
  },
};

export const RESULT_MESSAGES = {
  OUTPUT: {
    RESULT: "실행 결과",
    WINNER: "최종 우승자 :",
  },
};
