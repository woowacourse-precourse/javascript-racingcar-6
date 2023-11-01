const Messages = Object.freeze({
  INPUT_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  OUTPUT: "\n실행결과",
  WINNER: "최종 우승자 : ",

  ERROR: {
    INVALID_NAME_NULL: "[ERROR] 자동차 이름을 입력해주세요.",
    INVALID_NAME_NOT_SPACE: "[ERROR] 자동차 이름엔 띄어쓰기가 들어갈 수 없습니다.",
    INVALID_NAME_COMMA: "[ERROR] 쉼표의 위치를 다시 확인해주세요.",
    INVALID_NAME_LENGTH_LIMIT: "[ERROR] 자동차 이름은 5자 이하로만 입력해주세요.",
    INVALID_NAME_NO_SAME: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
    INVALID_NUMBER_INTEGER: "[ERROR] 횟수는 1이상의 정수만 가능합니다.",
  },
});
export default Messages;
