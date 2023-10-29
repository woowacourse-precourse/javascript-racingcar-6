class ErrorMessage {
  static INVALID_LENGTH = "[ERROR] 이름은 5자 이하여야 합니다.";
  static SPACE_NAME = "[ERROR] 이름은 공백이 아니어야 합니다.";
  static DUPLICATE_NAME = "[ERROR] 이름은 중복되지 않아야 합니다.";
  static INVALID_INPUT = "[ERROR] 입력은 숫자여야 합니다.";
}
class PromptMessage {
  static ENTER_CARNAME =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  static ENTER_ATTEMPT = "시도할 횟수는 몇 회인가요?\n";
  static PRINT_RACESTART = "\n실행 결과";
  static PRINT_WINNER(winner) {
    return `최종 우승자 : ${winner}`;
  }
}

export { ErrorMessage, PromptMessage };
