class PromptMessage {
  static ENTER_CARNAME =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

  static ENTER_ATTEMPT = '시도할 횟수는 몇 회인가요?\n';

  static PRINT_RACESTART = '\n실행 결과';

  static PRINT_WINNER(winner) {
    return `최종 우승자 : ${winner}`;
  }

  static PRINT_FORWARD(car, forwardCount) {
    return `${car} : ${forwardCount}`;
  }
}

export default PromptMessage;
