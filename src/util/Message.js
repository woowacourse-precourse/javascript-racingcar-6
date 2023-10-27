const Message = {
  INFO: {
    START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  },
  ERROR: {
    NAME_SHOULD_SPLIT_BY_COMMA: "[ERROR] ,을 포함해야함",
    NAME_HAS_REPEATED_COMMA: "[ERROR] ,가 중복됬다",
    NAME_EXCEEDED_MAX_LEN: "[ERROR] 이름 5자이하",
  },
};

export default Message;
