const Message = {
  INFO: {
    ASK_CAR_NAMES:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    ASK_EXECUTE_COUNT: "시도할 횟수는 몇 회인가요?\n",
    SHOW_EXECUTE_RESULT: "\n실행결과",
    FINAL_WINNER: "최종 우승자 : ",
  },
  ERROR: {
    NAME_SHOULD_SPLIT_BY_COMMA:
      "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해야 합니다",
    NAME_EXCEEDED_MAX_LEN: "[ERROR] 자동차 이름은 5자 이하만 가능합니다",
    NAME_HAS_REDUNDANCY: "자동차 이름은 중복될 수 없습니다",
    EXECUTE_COUNT_SHOULD_BE_POSITIVE_INT:
      "[ERROR] 시도 횟수는 양의 정수를 입력해야합니다.",
    EMPTY_INPUT: "[ERROR] 입력하지 않았습니다",
  },
};

export default Message;
