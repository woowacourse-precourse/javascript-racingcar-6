import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static async printResult() {
    MissionUtils.Console.print("실행 결과");
  }

  static async printLine(car, position) {
    MissionUtils.Console.print(`${car.name} : ${position}`);
  }

  static async printBlankLine() {
    MissionUtils.Console.print('\n');
  }

  static async printWinner(winners){
    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }
}

export default OutputView;
