const Message = {
  INFO: {
    ASK_CAR_NAMES:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    ASK_TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
  },
  ERROR: {
    NAME_SHOULD_SPLIT_BY_COMMA:
      "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해야 한다",
    NAME_HAS_REPEATED_COMMA: "[ERROR] ,는 중복 입력 할 수 없다",
    NAME_EXCEEDED_MAX_LEN: "[ERROR] 이름은 5자 이하만 가능하다",
    COUNT_SHOULD_BE_NUM: "[ERROR] 숫자가 아닌 것은 입력할 수 없다",
  },
};

export default Message;
